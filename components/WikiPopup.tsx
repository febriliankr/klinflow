import Link from "next/link";
import { ReactElement } from "react";
import { ToggleLayer, Transition } from "react-laag";
import ReactMarkdown from "react-markdown";
interface Props {
  children: string;
  qNumber: string;
  shortAnswer: string;
}

export default function WikiPopup({
  children,
  qNumber,
  shortAnswer,
}: Props): ReactElement {
  return (
    <div>
      <ToggleLayer
        renderLayer={({ isOpen, layerProps }) => (
          <Transition isOpen={isOpen}>
            {(isOpen, onTransitionEnd) => (
              <div
                ref={layerProps.ref}
                onTransitionEnd={onTransitionEnd}
                className="popup__layer"
                style={{
                  ...layerProps.style,
                  visibility: isOpen ? 'visible' : 'hidden',
                }}
              >
                <div className="apaini__container">
                  <p className="">
                  <ReactMarkdown source={shortAnswer}/>
                  </p>
                  <Link href={`/faq#q${qNumber}`}>
                    <a>Pelajari lebih lanjut</a>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        )}
        placement={{
          autoAdjust: true,
          triggerOffset: 10,
        }}
        closeOnOutsideClick
      >
        {({ triggerRef, toggle }) => (
          <a ref={triggerRef} className="link-apaini" onClick={toggle}>
            {children}
          </a>
        )}
      </ToggleLayer>
    </div>
  );
}
