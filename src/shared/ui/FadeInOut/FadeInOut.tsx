import { PropsWithChildren, useRef } from 'react';
import { Transition } from 'react-transition-group';
type TProps = PropsWithChildren<{
  isOpen: boolean;
}>

export const FadeInOut = (props: TProps) => {
  const duration = 300;
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease`,
    opacity: 0
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 }
  }

  return (
    <Transition nodeRef={nodeRef} mountOnEnter unmountOnExit in={props.isOpen} timeout={duration}>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {props.children}
        </div>
      )}
    </Transition>
  )
}