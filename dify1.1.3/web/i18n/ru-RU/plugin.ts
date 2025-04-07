const translation = {
  category: {
    extensions: 'Расширения',
    tools: 'Инструменты',
    models: 'Модели',
    all: 'Все',
    bundles: 'Пакеты',
    agents: 'Агентские стратегии',
  },
  categorySingle: {
    bundle: 'Связка',
    agent: 'Агентская стратегия',
    model: 'Модель',
    extension: 'Расширение',
    tool: 'Инструмент',
  },
  list: {
    source: {
      github: 'Установка с GitHub',
      marketplace: 'Установка из Marketplace',
      local: 'Установка из локального файла пакета',
    },
    notFound: 'Плагины не найдены',
    noInstalled: 'Плагины не установлены',
  },
  source: {
    github: 'Сайт GitHub',
    marketplace: 'Рынок',
    local: 'Локальный файл пакета',
  },
  detailPanel: {
    categoryTip: {
      github: 'Установлено с Github',
      debugging: 'Плагин для отладки',
      local: 'Локальный плагин',
      marketplace: 'Установлено из Marketplace',
    },
    operation: {
      viewDetail: 'Подробнее',
      detail: 'Подробности',
      info: 'Информация о плагине',
      remove: 'Убирать',
      install: 'Устанавливать',
      update: 'Обновлять',
      checkUpdate: 'Проверить обновление',
    },
    toolSelector: {
      placeholder: 'Выберите инструмент...',
      auto: 'Автоматически',
      title: 'Добавить инструмент',
      uninstalledTitle: 'Инструмент не установлен',
      descriptionLabel: 'Описание инструмента',
      unsupportedTitle: 'Неподдерживаемое действие',
      settings: 'ПОЛЬЗОВАТЕЛЬСКИЕ НАСТРОЙКИ',
      unsupportedContent: 'Установленная версия плагина не предусматривает этого действия.',
      empty: 'Нажмите кнопку «+», чтобы добавить инструменты. Вы можете добавить несколько инструментов.',
      uninstalledContent: 'Этот плагин устанавливается из репозитория local/GitHub. Пожалуйста, используйте после установки.',
      paramsTip2: 'Когда параметр «Автоматически» выключен, используется значение по умолчанию.',
      toolLabel: 'Инструмент',
      paramsTip1: 'Управляет параметрами вывода LLM.',
      descriptionPlaceholder: 'Краткое описание назначения инструмента, например, получение температуры для конкретного места.',
      params: 'КОНФИГУРАЦИЯ РАССУЖДЕНИЙ',
      unsupportedContent2: 'Нажмите, чтобы переключить версию.',
      uninstalledLink: 'Управление в плагинах',
    },
    configureTool: 'Инструмент настройки',
    endpointsTip: 'Этот плагин предоставляет определенные функциональные возможности через конечные точки, и вы можете настроить несколько наборов конечных точек для текущей рабочей области.',
    endpointDeleteTip: 'Удалить конечную точку',
    disabled: 'Нетрудоспособный',
    serviceOk: 'Услуга ОК',
    configureApp: 'Настройка приложения',
    endpointDeleteContent: 'Хотели бы вы удалить {{name}}?',
    strategyNum: '{{число}} {{Стратегия}} ВКЛЮЧЕННЫЙ',
    endpoints: 'Конечные точки',
    modelNum: '{{число}} МОДЕЛИ В КОМПЛЕКТЕ',
    endpointDisableTip: 'Отключить конечную точку',
    configureModel: 'Настройка модели',
    endpointModalDesc: 'После настройки можно использовать функции, предоставляемые плагином через конечные точки API.',
    endpointModalTitle: 'Настройка конечной точки',
    actionNum: '{{число}} {{действие}} ВКЛЮЧЕННЫЙ',
    endpointDisableContent: 'Хотели бы вы отключить {{name}}?',
    endpointsEmpty: 'Нажмите кнопку «+», чтобы добавить конечную точку',
    switchVersion: 'Версия для переключателя',
    endpointsDocLink: 'Посмотреть документ',
  },
  debugInfo: {
    title: 'Отладка',
    viewDocs: 'Просмотр документации',
  },
  privilege: {
    whoCanDebug: 'Кто может отлаживать плагины?',
    admins: 'Админы',
    noone: 'Никто',
    everyone: 'Каждый',
    title: 'Настройки плагина',
    whoCanInstall: 'Кто может устанавливать плагины и управлять ими?',
  },
  pluginInfoModal: {
    packageName: 'Пакет',
    title: 'Информация о плагине',
    repository: 'Хранилище',
    release: 'Отпускать',
  },
  action: {
    deleteContentLeft: 'Вы хотели бы удалить',
    pluginInfo: 'Информация о плагине',
    checkForUpdates: 'Проверка обновлений',
    delete: 'Удалить плагин',
    deleteContentRight: 'Плагин?',
    usedInApps: 'Этот плагин используется в приложениях {{num}}.',
  },
  installModal: {
    labels: {
      package: 'Пакет',
      version: 'Версия',
      repository: 'Хранилище',
    },
    readyToInstall: 'О программе установки следующего плагина',
    close: 'Закрывать',
    installedSuccessfully: 'Установка успешна',
    dropPluginToInstall: 'Перетащите пакет плагина сюда для установки',
    uploadFailed: 'Ошибка загрузки',
    cancel: 'Отмена',
    installFailed: 'Ошибка установки',
    readyToInstallPackages: 'О необходимости установки следующих плагинов {{num}}',
    installedSuccessfullyDesc: 'Плагин успешно установлен.',
    installComplete: 'Монтаж завершен',
    next: 'Следующий',
    fromTrustSource: 'Убедитесь, что вы устанавливаете плагины только из <trustSource>надежного источника</trustSource>.',
    install: 'Устанавливать',
    installPlugin: 'Установить плагин',
    installFailedDesc: 'Плагин был установлен не удалось.',
    back: 'Назад',
    pluginLoadErrorDesc: 'Этот плагин не будет установлен',
    installing: 'Установка...',
    uploadingPackage: 'Загрузка {{packageName}}...',
    pluginLoadError: 'Ошибка загрузки плагина',
    readyToInstallPackage: 'О программе установки следующего плагина',
  },
  installFromGitHub: {
    gitHubRepo: 'Репозиторий GitHub',
    selectPackagePlaceholder: 'Пожалуйста, выберите пакет',
    installNote: 'Убедитесь, что вы устанавливаете плагины только из надежного источника.',
    selectPackage: 'Выбрать пакет',
    installedSuccessfully: 'Установка успешна',
    selectVersion: 'Выберите версию',
    updatePlugin: 'Обновление плагина с GitHub',
    installFailed: 'Ошибка установки',
    uploadFailed: 'Ошибка загрузки',
    installPlugin: 'Установка плагина с GitHub',
    selectVersionPlaceholder: 'Пожалуйста, выберите версию',
  },
  upgrade: {
    close: 'Закрывать',
    upgrading: 'Установка...',
    successfulTitle: 'Установка успешна',
    title: 'Установить плагин',
    upgrade: 'Устанавливать',
    usedInApps: 'Используется в приложениях {{num}}',
    description: 'О программе установки следующего плагина',
  },
  error: {
    inValidGitHubUrl: 'Недопустимый URL-адрес GitHub. Пожалуйста, введите действительный URL-адрес в формате: https://github.com/owner/repo',
    noReleasesFound: 'Релизы не найдены. Пожалуйста, проверьте репозиторий GitHub или входной URL.',
    fetchReleasesError: 'Не удается получить релизы. Пожалуйста, повторите попытку позже.',
  },
  marketplace: {
    sortOption: {
      newlyReleased: 'Недавно выпущенные',
      mostPopular: 'Самые популярные',
      firstReleased: 'Впервые выпущен',
      recentlyUpdated: 'Недавно обновленные',
    },
    pluginsResult: 'Результаты {{num}}',
    moreFrom: 'Больше из Marketplace',
    noPluginFound: 'Плагин не найден',
    sortBy: 'Черный город',
    empower: 'Расширьте возможности разработки ИИ',
    difyMarketplace: 'Торговая площадка Dify',
    viewMore: 'Подробнее',
    and: 'и',
    discover: 'Обнаруживать',
  },
  task: {
    installing: 'Установка плагинов {{installingLength}}, 0 готово.',
    installingWithError: 'Установка плагинов {{installingLength}}, {{successLength}} успех, {{errorLength}} неудачный',
    clearAll: 'Очистить все',
    installingWithSuccess: 'Установка плагинов {{installingLength}}, {{successLength}} успех.',
    installedError: 'плагины {{errorLength}} не удалось установить',
    installError: 'Плагины {{errorLength}} не удалось установить, нажмите для просмотра',
  },
  install: '{{num}} установок',
  searchCategories: 'Поиск категорий',
  search: 'Искать',
  searchInMarketplace: 'Поиск в маркетплейсе',
  searchTools: 'Инструменты поиска...',
  allCategories: 'Все категории',
  endpointsEnabled: '{{num}} наборы включенных конечных точек',
  submitPlugin: 'Отправить плагин',
  installAction: 'Устанавливать',
  from: 'От',
  installFrom: 'УСТАНОВИТЬ С',
  findMoreInMarketplace: 'Узнайте больше в Marketplace',
  installPlugin: 'Установка плагина',
  searchPlugins: 'Плагины поиска',
  fromMarketplace: 'Из маркетплейса',
}

export default translation
