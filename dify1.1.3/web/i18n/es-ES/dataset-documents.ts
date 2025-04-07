const translation = {
  list: {
    title: 'Documentos',
    desc: 'Aquí se muestran todos los archivos del Conocimiento, y todo el Conocimiento se puede vincular a citas de Dify o indexarse a través del complemento de Chat.',
    addFile: 'Agregar archivo',
    addPages: 'Agregar páginas',
    addUrl: 'Agregar URL',
    table: {
      header: {
        fileName: 'NOMBRE DEL ARCHIVO',
        words: 'PALABRAS',
        hitCount: 'CANTIDAD DE RECUPERACIÓN',
        uploadTime: 'TIEMPO DE CARGA',
        status: 'ESTADO',
        action: 'ACCIÓN',
        chunkingMode: 'MODO DE FRAGMENTACIÓN',
      },
      rename: 'Renombrar',
      name: 'Nombre',
    },
    action: {
      uploadFile: 'Subir nuevo archivo',
      settings: 'Configuración de segmento',
      addButton: 'Agregar fragmento',
      add: 'Agregar un fragmento',
      batchAdd: 'Agregar en lotes',
      archive: 'Archivar',
      unarchive: 'Desarchivar',
      delete: 'Eliminar',
      enableWarning: 'El archivo archivado no puede habilitarse',
      sync: 'Sincronizar',
    },
    index: {
      enable: 'Habilitar',
      disable: 'Deshabilitar',
      all: 'Todos',
      enableTip: 'El archivo se puede indexar',
      disableTip: 'El archivo no se puede indexar',
    },
    status: {
      queuing: 'En cola',
      indexing: 'Indexando',
      paused: 'Pausado',
      error: 'Error',
      available: 'Disponible',
      enabled: 'Habilitado',
      disabled: 'Deshabilitado',
      archived: 'Archivado',
    },
    empty: {
      title: 'Aún no hay documentación',
      upload: {
        tip: 'Puedes subir archivos, sincronizar desde el sitio web o desde aplicaciones web como Notion, GitHub, etc.',
      },
      sync: {
        tip: 'Dify descargará periódicamente archivos desde tu Notion y completará el procesamiento.',
      },
    },
    delete: {
      title: '¿Seguro que deseas eliminar?',
      content: 'Si necesitas reanudar el procesamiento más tarde, continuarás desde donde lo dejaste.',
    },
    batchModal: {
      title: 'Agregar fragmentos en lotes',
      csvUploadTitle: 'Arrastra y suelta tu archivo CSV aquí, o ',
      browse: 'navega',
      tip: 'El archivo CSV debe cumplir con la siguiente estructura:',
      question: 'pregunta',
      answer: 'respuesta',
      contentTitle: 'contenido del fragmento',
      content: 'contenido',
      template: 'Descarga la plantilla aquí',
      cancel: 'Cancelar',
      run: 'Ejecutar en lotes',
      runError: 'Error al ejecutar en lotes',
      processing: 'Procesamiento en lotes',
      completed: 'Importación completada',
      error: 'Error de importación',
      ok: 'Aceptar',
    },
    learnMore: 'Aprende más',
  },
  metadata: {
    title: 'Metadatos',
    desc: 'Etiquetar metadatos para documentos permite que la IA acceda a ellos de manera oportuna y expone la fuente de referencias para los usuarios.',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'Por favor, selecciona un tipo de documento',
    docTypeChangeTitle: 'Cambiar tipo de documento',
    docTypeSelectWarning:
      'Si se cambia el tipo de documento, los metadatos ahora llenos ya no se conservarán.',
    firstMetaAction: 'Vamos D',
    placeholder: {
      add: 'Agregar ',
      select: 'Seleccionar ',
    },
    source: {
      upload_file: 'Subir archivo',
      notion: 'Sincronizar desde Notion',
      github: 'Sincronizar desde GitHub',
    },
    type: {
      book: 'Libro',
      webPage: 'Página Web',
      paper: 'Artículo',
      socialMediaPost: 'Publicación en Redes Sociales',
      personalDocument: 'Documento Personal',
      businessDocument: 'Documento de Negocios',
      IMChat: 'Chat IM',
      wikipediaEntry: 'Entrada de Wikipedia',
      notion: 'Sincronizar desde Notion',
      github: 'Sincronizar desde GitHub',
      technicalParameters: 'Parámetros Técnicos',
    },
    field: {
      processRule: {
        processDoc: 'Procesar documento',
        segmentRule: 'Regla de segmentación',
        segmentLength: 'Longitud de fragmentos',
        processClean: 'Limpieza de texto procesado',
      },
      book: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        publisher: 'Editorial',
        publicationDate: 'Fecha de publicación',
        ISBN: 'ISBN',
        category: 'Categoría',
      },
      webPage: {
        title: 'Título',
        url: 'URL',
        language: 'Idioma',
        authorPublisher: 'Autor/Editorial',
        publishDate: 'Fecha de publicación',
        topicKeywords: 'Temas/Palabras clave',
        description: 'Descripción',
      },
      paper: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        publishDate: 'Fecha de publicación',
        journalConferenceName: 'Nombre de la revista/conferencia',
        volumeIssuePage: 'Volumen/Número/Página',
        DOI: 'DOI',
        topicsKeywords: 'Temas/Palabras clave',
        abstract: 'Resumen',
      },
      socialMediaPost: {
        platform: 'Plataforma',
        authorUsername: 'Autor/Nombre de usuario',
        publishDate: 'Fecha de publicación',
        postURL: 'URL de la publicación',
        topicsTags: 'Temas/Etiquetas',
      },
      personalDocument: {
        title: 'Título',
        author: 'Autor',
        creationDate: 'Fecha de creación',
        lastModifiedDate: 'Última fecha de modificación',
        documentType: 'Tipo de documento',
        tagsCategory: 'Etiquetas/Categoría',
      },
      businessDocument: {
        title: 'Título',
        author: 'Autor',
        creationDate: 'Fecha de creación',
        lastModifiedDate: 'Última fecha de modificación',
        documentType: 'Tipo de documento',
        departmentTeam: 'Departamento/Equipo',
      },
      IMChat: {
        chatPlatform: 'Plataforma de chat',
        chatPartiesGroupName: 'Partes de chat/Nombre del grupo',
        participants: 'Participantes',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha de fin',
        topicsKeywords: 'Temas/Palabras clave',
        fileType: 'Tipo de archivo',
      },
      wikipediaEntry: {
        title: 'Título',
        language: 'Idioma',
        webpageURL: 'URL de la página web',
        editorContributor: 'Editor/Contribuidor',
        lastEditDate: 'Última fecha de edición',
        summaryIntroduction: 'Resumen/Introducción',
      },
      notion: {
        title: 'Título',
        language: 'Idioma',
        author: 'Autor',
        createdTime: 'Fecha de creación',
        lastModifiedTime: 'Última fecha de modificación',
        url: 'URL',
        tag: 'Etiqueta',
        description: 'Descripción',
      },
      github: {
        repoName: 'Nombre del repositorio',
        repoDesc: 'Descripción del repositorio',
        repoOwner: 'Propietario del repositorio',
        fileName: 'Nombre del archivo',
        filePath: 'Ruta del archivo',
        programmingLang: 'Lenguaje de programación',
        url: 'URL',
        license: 'Licencia',
        lastCommitTime: 'Última hora de compromiso',
        lastCommitAuthor: 'Último autor del compromiso',
      },
      originInfo: {
        originalFilename: 'Nombre de archivo original',
        originalFileSize: 'Tamaño de archivo original',
        uploadDate: 'Fecha de carga',
        lastUpdateDate: 'Última fecha de actualización',
        source: 'Fuente',
      },
      technicalParameters: {
        segmentSpecification: 'Especificación de fragmentos',
        segmentLength: 'Longitud de fragmentos',
        avgParagraphLength: 'Longitud promedio del párrafo',
        paragraphs: 'Párrafos',
        hitCount: 'Cantidad de recuperación',
        embeddingTime: 'Tiempo de incrustación',
        embeddedSpend: 'Gasto incrustado',
      },
    },
    languageMap: {
      zh: 'Chino',
      en: 'Inglés',
      es: 'Español',
      fr: 'Francés',
      de: 'Alemán',
      ja: 'Japonés',
      ko: 'Coreano',
      ru: 'Ruso',
      ar: 'Árabe',
      pt: 'Portugués',
      it: 'Italiano',
      nl: 'Holandés',
      pl: 'Polaco',
      sv: 'Sueco',
      tr: 'Turco',
      he: 'Hebreo',
      hi: 'Hindi',
      da: 'Danés',
      fi: 'Finlandés',
      no: 'Noruego',
      hu: 'Húngaro',
      el: 'Griego',
      cs: 'Checo',
      th: 'Tailandés',
      id: 'Indonesio',
    },
    categoryMap: {
      book: {
        fiction: 'Ficción',
        biography: 'Biografía',
        history: 'Historia',
        science: 'Ciencia',
        technology: 'Tecnología',
        education: 'Educación',
        philosophy: 'Filosofía',
        religion: 'Religión',
        socialSciences: 'Ciencias Sociales',
        art: 'Arte',
        travel: 'Viaje',
        health: 'Salud',
        selfHelp: 'Autoayuda',
        businessEconomics: 'Negocios y Economía',
        cooking: 'Cocina',
        childrenYoungAdults: 'Niños y Jóvenes Adultos',
        comicsGraphicNovels: 'Cómics y Novelas Gráficas',
        poetry: 'Poesía',
        drama: 'Drama',
        other: 'Otros',
      },
      personalDoc: {
        notes: 'Notas',
        blogDraft: 'Borrador de blog',
        diary: 'Diario',
        researchReport: 'Informe de investigación',
        bookExcerpt: 'Extracto de libro',
        schedule: 'Horario',
        list: 'Lista',
        projectOverview: 'Visión general del proyecto',
        photoCollection: 'Colección de fotos',
        creativeWriting: 'Escritura creativa',
        codeSnippet: 'Fragmento de código',
        designDraft: 'Borrador de diseño',
        personalResume: 'Currículum personal',
        other: 'Otros',
      },
      businessDoc: {
        meetingMinutes: 'Minutos de reunión',
        researchReport: 'Informe de investigación',
        proposal: 'Propuesta',
        employeeHandbook: 'Manual del empleado',
        trainingMaterials: 'Materiales de capacitación',
        requirementsDocument: 'Documento de requisitos',
        designDocument: 'Documento de diseño',
        productSpecification: 'Especificación del producto',
        financialReport: 'Informe financiero',
        marketAnalysis: 'Análisis de mercado',
        projectPlan: 'Plan de proyecto',
        teamStructure: 'Estructura del equipo',
        policiesProcedures: 'Políticas y procedimientos',
        contractsAgreements: 'Contratos y acuerdos',
        emailCorrespondence: 'Correspondencia por correo electrónico',
        other: 'Otros',
      },
    },
  },
  embedding: {
    processing: 'Procesando incrustación...',
    paused: 'Incrustación pausada',
    completed: 'Incrustación completada',
    error: 'Error de incrustación',
    docName: 'Preprocesamiento del documento',
    mode: 'Regla de segmentación',
    segmentLength: 'Longitud de fragmentos',
    textCleaning: 'Definición de texto y limpieza previa',
    segments: 'Párrafos',
    highQuality: 'Modo de alta calidad',
    economy: 'Modo económico',
    estimate: 'Consumo estimado',
    stop: 'Detener procesamiento',
    resume: 'Reanudar procesamiento',
    automatic: 'Automático',
    custom: 'Personalizado',
    previewTip: 'La vista previa del párrafo estará disponible después de que se complete la incrustación',
    pause: 'Pausa',
    childMaxTokens: 'Niño',
    hierarchical: 'Padre-hijo',
    parentMaxTokens: 'Padre',
  },
  segment: {
    paragraphs: 'Párrafos',
    keywords: 'Palabras clave',
    addKeyWord: 'Agregar palabra clave',
    keywordError: 'La longitud máxima de la palabra clave es 20',
    characters: 'caracteres',
    hitCount: 'Cantidad de recuperación',
    vectorHash: 'Hash de vector: ',
    questionPlaceholder: 'agregar pregunta aquí',
    questionEmpty: 'La pregunta no puede estar vacía',
    answerPlaceholder: 'agregar respuesta aquí',
    answerEmpty: 'La respuesta no puede estar vacía',
    contentPlaceholder: 'agregar contenido aquí',
    contentEmpty: 'El contenido no puede estar vacío',
    newTextSegment: 'Nuevo segmento de texto',
    newQaSegment: 'Nuevo segmento de preguntas y respuestas',
    delete: '¿Eliminar este fragmento?',
    chunks_one: 'PEDAZO',
    childChunks_one: 'FRAGMENTO SECUNDARIO',
    searchResults_other: 'RESULTADOS',
    newChunk: 'Nuevo fragmento',
    childChunk: 'Fragmento secundario',
    addChunk: 'Agregar fragmento',
    editParentChunk: 'Editar fragmento principal',
    regenerationConfirmMessage: 'La regeneración de fragmentos secundarios sobrescribirá los fragmentos secundarios actuales, incluidos los fragmentos editados y los fragmentos recién agregados. La regeneración no se puede deshacer.',
    addAnother: 'Añade otro',
    regeneratingMessage: 'Esto puede tardar un momento, por favor espere...',
    addChildChunk: 'Agregar fragmento secundario',
    chunks_other: 'TROZOS',
    editChunk: 'Editar fragmento',
    searchResults_one: 'RESULTADO',
    parentChunks_one: 'FRAGMENTO PRIMARIO',
    edited: 'EDITADO',
    childChunkAdded: 'Se ha añadido 1 fragmento secundario',
    childChunks_other: 'FRAGMENTOS SECUNDARIOS',
    chunkAdded: '1 trozo añadido',
    parentChunk: 'Fragmento primario',
    editChildChunk: 'Editar fragmento secundario',
    regeneratingTitle: 'Regeneración de fragmentos secundarios',
    editedAt: 'Editado en',
    searchResults_zero: 'RESULTADO',
    clearFilter: 'Borrar filtro',
    newChildChunk: 'Nuevo fragmento secundario',
    chunkDetail: 'Detalle de fragmentos',
    chunk: 'Pedazo',
    parentChunks_other: 'FRAGMENTOS PRINCIPALES',
    expandChunks: 'Expandir fragmentos',
    empty: 'No se ha encontrado ningún fragmento',
    regenerationSuccessTitle: 'Regeneración completada',
    collapseChunks: 'Contraer fragmentos',
    characters_other: 'Caracteres',
    characters_one: 'carácter',
    regenerationSuccessMessage: 'Puede cerrar esta ventana.',
    regenerationConfirmTitle: '¿Desea regenerar fragmentos secundarios?',
  },
}

export default translation
