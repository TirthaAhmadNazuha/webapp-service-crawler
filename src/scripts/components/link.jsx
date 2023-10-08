/** @param {import('react').HTMLAttributes<HTMLAnchorElement>} props  */
function Link(props, childs) {
  return (<a {...props} onClick={(e, elem) => {
    e.preventDefault();
    const state = {
      scrollY: window.scrollY,
      pathname: window.location.pathname
    };
    window.history.pushState(state, '', props.href);
    if (window.location.pathname == props.href) window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('pagechange', { detail: { state } }));
    if (typeof props?.onClick == 'function') props.onClick(e, elem);
  }}>{childs}</a>);
}

export default Link;
