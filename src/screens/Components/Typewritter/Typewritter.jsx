import { useEffect, React, useRef } from "react";
import "./Typewritter.css";

/**
 * Typewritter component creates a typing animation effect for a series of messages.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string[]} [props.data=[]] - An array of strings to be displayed in the typing animation.
 * @param {number} [props.TypeSpeed=100] - The speed (in milliseconds) at which each character is typed.
 * @param {number} [props.MsgDelay=2000] - The delay (in milliseconds) before starting the next message.
 *
 * @returns {JSX.Element} A read-only textarea element that displays the typing animation.
 *
 * @example
 * <Typewritter
 *   data={["Hello, world!", "Welcome to my portfolio."]}
 *   TypeSpeed={150}
 *   MsgDelay={2500}
 * />
 *
 * @remarks
 * - The component uses `useRef` to store mutable values that do not trigger re-renders.
 * - The typing animation is implemented using a recursive `setTimeout` function.
 * - The `useEffect` hook ensures the animation starts when the component is mounted.
 * - The animation loops through the messages indefinitely.
 */

function Typewritter({ data = [], TypeSpeed = 100, MsgDelay = 2000 }) {
  //   useRef doesn't trigger re-renders when updated, so it's perfect for storing mutable values that don't need to cause a re-render when changed.
  // This is useful for performance optimization, especially in cases where the value is updated frequently, like in a typing animation.
  const typeSpeedRef = useRef(TypeSpeed);
  const msgDelayRef = useRef(MsgDelay);
  const dataRef = useRef(data);

  // useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. Uses the hook in React to create and start the typing animation as soon as the component renders.
  // It runs after the render is committed to the screen, and it can return a cleanup function to run when the component unmounts or before the effect runs again.
  useEffect(() => {
    let CharacterPos = 0; /*Tracks the position of the current character being typed in the current message.*/
    let MsgBuffer = ""; /*Stores the partially typed message for display.*/
    let MsgIndex = 0; /*Tracks the index of the current message being typed.*/
    let Delay; /*Stores the delay time for the next character to be typed.*/

    function StartTyping() {
      let id = document.getElementById("typing-text");

      if (CharacterPos !== dataRef.current[MsgIndex].length) {
        /*Checks if the current message is fully typed.*/
        MsgBuffer =
          MsgBuffer +
          dataRef.current[MsgIndex].charAt(
            CharacterPos
          ); /*Adds the next character to the buffer.*/
        id.value =
          MsgBuffer +
          "|"; /*Updates the textarea with the current message and adds a cursor.*/
        Delay = typeSpeedRef.current; /*Sets the delay for the next character.*/
      } else {
        /*If the current message is fully typed, prepare for the next message.*/
        Delay = msgDelayRef.current; /*Sets the delay for the next message.*/
        MsgBuffer = ""; /*Resets the buffer for the next message.*/
        CharacterPos =
          -1; /*Resets the character position for the next message.*/

        if (MsgIndex !== dataRef.current.length - 1) {
          /*Checks if there are more messages to type.*/
          MsgIndex++;
        } else {
          /*If all messages are typed, reset to the first message.*/
          MsgIndex = 0;
        }
      }
      CharacterPos++; /*Moves to the next character position.*/
      setTimeout(
        StartTyping,
        Delay
      ); /*Recursively calls the function to type the next character after the delay.*/
    }

    StartTyping();
  }, []);

  return <textarea id="typing-text" readOnly></textarea>;
}

export default Typewritter;
