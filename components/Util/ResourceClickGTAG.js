export const resourceRefHandler = async (e) => {
  const name = await event.target.parentNode.getAttribute('data-click-name');

  const target = await event.target.parentNode.getAttribute(
    'data-click-target'
  );

  window.gtag('event', 'resource_click'),
    {
      resource: `${name}`,
    };
};
