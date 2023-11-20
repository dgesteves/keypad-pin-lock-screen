import {
  StyledErrorText,
  StyledKeyCircle,
  StyledKeyCircleWrapper,
  StyledKeypadCircle,
  StyledKeypadTitle,
  StyledKeypadWrapper,
  StyledWelcomeParagraph,
  StyledWelcomeText,
  StyledWorkSpacePage,
} from './styles';
import { useEffect, useMemo, useState } from 'react';

type Pin = number[];

export function WorkSpacePage() {
  const [isLocked, setIsLocked] = useState(true);
  const [error, setError] = useState(false);
  const [inputtedPin, setInputtedPin] = useState<Pin>([]);

  const keypad = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], []);
  const pin = useMemo(() => [1, 2, 3, 4], []);

  useEffect(() => {
    if (inputtedPin.length === 4) {
      const isCorrectPin = inputtedPin.every((key, index) => {
        return key === pin[index];
      });
      if (isCorrectPin) {
        setInputtedPin([]);
        setIsLocked(false);
      } else {
        setInputtedPin([]);
        setError(true);
      }
      isCorrectPin ? setIsLocked(false) : setError(true);
    }
  }, [inputtedPin, pin]);

  const handleCheckPin = (key: number) => {
    setInputtedPin((prev) => [...prev, key]);
  };

  return (
    <StyledWorkSpacePage>
      {isLocked ? (
        <>
          <StyledKeypadTitle>Confirm your new PIN</StyledKeypadTitle>
          <StyledKeyCircleWrapper>
            {pin.map((key) => (
              <StyledKeyCircle key={key} />
            ))}
          </StyledKeyCircleWrapper>
          {error && (
            <StyledErrorText>Incorrect PIN code. Try again.</StyledErrorText>
          )}
          <StyledKeypadWrapper>
            {keypad.map((key) => (
              <StyledKeypadCircle key={key} onClick={() => handleCheckPin(key)}>
                {key}
              </StyledKeypadCircle>
            ))}
            <StyledKeypadCircle>X</StyledKeypadCircle>
          </StyledKeypadWrapper>
        </>
      ) : (
        <>
          <StyledWelcomeText>Welcome!</StyledWelcomeText>
          <StyledWelcomeParagraph>
            You entered the correct PIN code
          </StyledWelcomeParagraph>
        </>
      )}
    </StyledWorkSpacePage>
  );
}
