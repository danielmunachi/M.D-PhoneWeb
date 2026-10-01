document.addEventListener('DOMContentLoaded', () => {
  MDP.updateCartCount();
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => document.querySelector('.site-nav').classList.toggle('open'));
  document.querySelectorAll('[data-whatsapp-message]').forEach(button => button.addEventListener('click', () => MDP.whatsapp(button.dataset.whatsappMessage)));
  const hot = document.querySelector('#hot-deals'); const featured = document.querySelector('#featured-products');
  if (hot) hot.innerHTML = MDP.getProducts().filter(product => product.status === 'HOT-DEAL').map(MDP.productCard).join('') || '<p class="empty">Fresh deals are landing soon.</p>';
  if (featured) featured.innerHTML = MDP.getProducts().filter(product => MDP.isAvailable(product)).slice(0, 4).map(MDP.productCard).join('');
  MDP.bindProductActions();
});
