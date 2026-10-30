// Фильтрация блюд по типу

document.querySelectorAll('.filters').forEach(function (filters) {
  filters.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-kind]');

    if (!button) {
      return;
    }

    const section = button.closest('section');
    const kind = button.dataset.kind;
    const wasActive = button.classList.contains('active');

    // Выбранный фильтр в категории может быть только один
    filters.querySelectorAll('button').forEach(function (item) {
      item.classList.remove('active');
    });

    let activeKind = null;

    if (!wasActive) {
      button.classList.add('active');
      activeKind = kind;
    }

    // Скрываем блюда другого типа, при снятии фильтра показываем все
    section.querySelectorAll('.dish').forEach(function (card) {
      card.hidden = activeKind !== null && card.dataset.kind !== activeKind;
    });
  });
});
