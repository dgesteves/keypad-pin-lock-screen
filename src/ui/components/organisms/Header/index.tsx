import {
  StyledAvatar,
  StyledButtonText,
  StyledHeader,
  StyledLogo,
  StyledNavigation,
  StyledTabs,
  StyledText,
  StyledTopBar,
  StyledTrailing,
} from './styles';
import { Button, LinkIcon, Tab } from '@ui';

export function Header() {
  const onClick = () => {
    window.open('https://github.com/dgesteves', '_blank');
  };

  return (
    <StyledHeader>
      <StyledTopBar>
        <StyledLogo>Balance Code Interview</StyledLogo>
        <StyledTrailing>
          <StyledAvatar>DE</StyledAvatar>
        </StyledTrailing>
      </StyledTopBar>
      <StyledNavigation>
        <StyledTabs>
          <Tab to={'/'}>
            <StyledText>Home</StyledText>
          </Tab>
          <Tab to={'/workspace'}>
            <StyledText>Work Space</StyledText>
          </Tab>
          <Tab to={'/notfound'}>
            <StyledText>Not Found</StyledText>
          </Tab>
        </StyledTabs>
        <Button onClick={onClick}>
          <StyledButtonText>
            Diogo's Github
            <LinkIcon size={16} />
          </StyledButtonText>
        </Button>
      </StyledNavigation>
    </StyledHeader>
  );
}
