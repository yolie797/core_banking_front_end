import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const PrimaryButton = styled(Button)({
  minHeight: '50px',
  borderRadius: '7px',
  backgroundColor: '#0D47A1', // Use the color from ThemeColors.hpDarkBlue
  '&:hover': {
    backgroundColor: '#0B3C91', // Darker shade for hover effect
  },
});

export const CategoryNotActiveButton = styled(Button)({
  minWidth: '85px',
  minHeight: '38px',
  border: '1px solid #0D47A1',
  backgroundColor: '#0D47A1',
  color: '#FFFFFF', // Ensure the text is visible on the blue background
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#0B3C91',
    borderColor: '#0B3C91',
  },
});

export const CategoryActiveButton = styled(Button)({
  minWidth: '85px',
  minHeight: '38px',
  border: '1px solid #0D47A1',
  color: '#0D47A1',
  borderRadius: '8px',
  backgroundColor: 'transparent', // Assuming active state means no background
  '&:hover': {
    backgroundColor: '#F5F5F5', // Light grey for hover effect
  },
});
