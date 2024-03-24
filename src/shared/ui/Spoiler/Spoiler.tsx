import { useCallback, useEffect, useRef, useState } from "react";
import { useBemCN, useSleep } from "shared";
import { ReactComponent as PlusIcon } from 'shared/assets/icons/plus.svg';
import './style.scss';

type TProps = {
  label: string;
  value: string;
}

export const Spoiler = (props: TProps) => {
  const spoilerBlock = useBemCN('spoiler');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const valueNodeRef = useRef<HTMLDivElement | null>(null);
  const sleep = useSleep();

  const toggleSpoiler = () => {
    if (isTransition) {
      return
    }
    setIsOpen(!isOpen)
  }

  const recalcValueNodeRefHeight = useCallback(async () => {
    if (valueNodeRef.current) {
      const contentNodeCopy = valueNodeRef.current.cloneNode(true) as HTMLDivElement;
      contentNodeCopy.style.transition = ''
      contentNodeCopy.style.height = 'fit-content'
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
    <div className={spoilerBlock({ open: isOpen })}>
      <header
        className={spoilerBlock('header')}
        onClick={toggleSpoiler}
      >
        <span className={spoilerBlock('label')}>{props.label}</span>
        <button
          className={spoilerBlock('button')}
          type="button"
        >

          OPEN/CLOSE

          <div className={spoilerBlock('icon-wrapper')}>
            <PlusIcon />
          </div>
        </button>
      </header>
      <div
        ref={valueNodeRef}
        className={spoilerBlock('value')}
      >
        <div className={spoilerBlock('value-content')}>
          {props.value}
        </div>
      </div>
    </div>
  )

}