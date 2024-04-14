import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import { useBemCN, useSleep } from "shared";
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrow-small.svg';
import './style.scss';

type TProps = {
  label: string;
  children: ReactNode;
  value: string;
}

export const Select = (props: TProps) => {
  const selectBlock = useBemCN('select');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const valueNodeRef = useRef<HTMLDivElement | null>(null);
  const sleep = useSleep();

  const toggleSelect = () => {
    if (isTransition) {
      return
    }
    setIsOpen(!isOpen)
  }

  const closeSelect = () => {
    if (isTransition) return

    setIsOpen(false)
  }

  const recalcValueNodeRefHeight = useCallback(async () => {
    if (valueNodeRef.current) {
      const rect = valueNodeRef.current.getBoundingClientRect()
      const contentNodeCopy = valueNodeRef.current.cloneNode(true) as HTMLDivElement;
      contentNodeCopy.style.transition = ''
      contentNodeCopy.style.height = 'fit-content'
      contentNodeCopy.style.width = `${rect.width}px`
      contentNodeCopy.style.visibility = 'hidden'
      document.body.append(contentNodeCopy)
      const scrollHeight = contentNodeCopy.scrollHeight
      contentNodeCopy.remove()
      const height = isOpen ? scrollHeight : 0

      if (valueNodeRef.current) {
        if (!isOpen) {
          valueNodeRef.current.style.height = `${scrollHeight}px`
        }

        await sleep();

        valueNodeRef.current.style.height = `${height}px`;

        const onTransitionEnd = () => {
          setIsTransition(false)
          if (isOpen && valueNodeRef.current) {
            valueNodeRef.current.style.height = 'fit-content';
          }
          valueNodeRef.current?.removeEventListener('transitionstart', onTransitionStart)
          valueNodeRef.current?.removeEventListener('transitionend', onTransitionEnd)
        }
        const onTransitionStart = () => {
          setIsTransition(true)
        }

        valueNodeRef.current.addEventListener('transitionstart', onTransitionStart)
        valueNodeRef.current.addEventListener('transitionend', onTransitionEnd)
      }
    }
  }, [isOpen, sleep])

  useEffect(() => {
    recalcValueNodeRefHeight()
  }, [isOpen]) // eslint-disable-line

  return (
    <ClickAwayListener onClickAway={closeSelect}>
      <div className={selectBlock({ open: isOpen, selected: Boolean(props.value) })}>
        <header
          className={selectBlock('header')}
          onClick={toggleSelect}
        >
          <span className={selectBlock('label')}>{props.value || props.label}</span>
          <button
            className={selectBlock('button')}
            type="button"
          >

            OPEN/CLOSE

            <div className={selectBlock('icon-wrapper')}>
              <ArrowIcon />
            </div>
          </button>
        </header>
        <div
          ref={valueNodeRef}
          className={selectBlock('value')}
        >
          <div className={selectBlock('value-content')}>
            {props.children}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )

}