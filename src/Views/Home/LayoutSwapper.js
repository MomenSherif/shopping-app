import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';

export default function LayoutSwapper({ layout, onChange }) {
  return (
    <Box display="flex" justifyContent="flex-end" mb={4}>
      <IconButton
        color={layout === 'vertical' ? 'primary' : 'default'}
        onClick={() => onChange('vertical')}
      >
        <AppsIcon />
      </IconButton>
      <IconButton
        color={layout !== 'vertical' ? 'primary' : 'default'}
        onClick={() => onChange('horizontal')}
      >
        <ListIcon />
      </IconButton>
    </Box>
  );
}
