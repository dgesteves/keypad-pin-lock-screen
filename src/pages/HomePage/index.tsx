import {
  StyledCircle,
  StyledEmptyState,
  StyledEmptyStateText,
  StyledHome,
} from './styles';
import { Button } from '@ui';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/workspace');
  };

  return (
    <StyledHome>
      <StyledCircle>
        <StyledCircle>
          <StyledCircle />
          <StyledCircle />
        </StyledCircle>
      </StyledCircle>
      <StyledEmptyState>
        <StyledEmptyStateText>
          Balance live code interview, start on work space, let's go!
        </StyledEmptyStateText>
        <Button
          dataCy="create-board-button-empty-state"
          onClick={onClick}
          variant="secondary"
        >
          Go to Work Space
        </Button>
      </StyledEmptyState>
    </StyledHome>
  );
}
