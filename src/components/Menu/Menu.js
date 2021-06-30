import { useState } from 'react';
import MenuMUI from '@material-ui/core/Menu';

export default function Menu({
  renderTrigger,
  renderMenu,
  children,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = (event) => setAnchorEl(event.currentTarget);
  const close = () => setAnchorEl(null);

  return (
    <>
      {renderTrigger({ open, close })}
      <MenuMUI
        id="shopping-cart"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={close}
        {...props}
      >
        {children ? children : renderMenu({ open, close })}
      </MenuMUI>
    </>
  );
}
