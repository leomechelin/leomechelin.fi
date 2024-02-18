type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://leomechelin.fi",
    projectNameDB: "leomechelin",
    projectId: 1,
    backendBaseURL: "https://leomechelin.fi/api",
    alternateFacsimileBaseURL: "https://leomechelin-facsimiles.storage.googleapis.com/facsimile_collection",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" },
        { code: "fi", label: "Suomi", region: "FI" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: true,
      multilingualReadingTextLanguages: ["sv", "fi"],
      multilingualNamedEntityData: true
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "alt-text",
          URL: "assets/images/home-page-banner.jpg"
        },
        fi: {
          altText: "alt-teksti",
          URL: "assets/images/home-page-banner.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: {
      1: "1_1199"
    },
    frontMatterPages: {
      cover: true,
      title: true,
      foreword: false,
      introduction: true
    },
    order: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
  },
  page: {
    about: {
      initialPageNode: "01-01"
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Kollage: Leo Mechelin fotograferad cirka 1900–1905. Som bakgrund Statsrådsborgen samt Mechelins manuskript till verket Précis du droit public du grand-duché de Finlande från 1886.",
          fi: "Kollaasi: Leo Mechelin valokuvattuna noin 1900–1905. Taustalla Valtioneuvoston linna sekä Mechelinin käsikirjoitus teokseen Précis du droit public du grand-duché de Finlande vuodelta 1886."
        },
        intrinsicSize: {
          height: null,
          width: null
        },
        orientationPortrait: false,
        alternateSources: [],
        URL: "../../assets/images/Leo_Mechelin.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      persons: {
        database: "default",
        showFilter: false
      }
    },
    introduction: {
      hasSeparateTOC: false,
      showURNButton: true,
      showViewOptionsButton: true,
      showTextDownloadButton: true,
      viewOptions: {
        personInfo: false,
        placeInfo: false,
        workInfo: false,
        paragraphNumbering: false,
        pageBreakEdition: false
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["readingtext_sv", "readingtext_fi", "manuscripts", "facsimiles"],
      defaultViewOptions: ["comments", "personInfo", "abbreviations"],
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: true,
        personInfo: true,
        placeInfo: false,
        emendations: true,
        normalisations: false,
        workInfo: false,
        abbreviations: true,
        paragraphNumbering: false,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      viewTypes: {
        showAll: true,
        readingtext: true,
        manuscripts: true,
        comments: false,
        facsimiles: true,
        variants: false,
        illustrations: false,
        legend: false,
        metadata: true
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      sortableCollectionsCategorical: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      categoricalSortingPrimaryKey: "genre",
      categoricalSortingSecondaryKey: "date"
    },
    contentGrid: {
      includeEbooks: false,
      includeMediaCollection: false,
      showTitles: true
    },
    epub: {
      showTOCButton: true,
      showURNButton: true,
      showViewOptionsButton: true
    },
    facsimiles: {
      imageQuality: 1,
      showTitle: false
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: true,
        indexPlaces: false,
        indexWorks: false
      }
    },
    manuscripts: {
      showTitle: false,
      showNormalizedToggle: true,
      showOpenLegendButton: false
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: false,
      showURNButton: false,
      showLanguageButton: true,
      showSiteLogo: false,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_white_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_white_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
    },
    variants: {
      showOpenLegendButton: false
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: true,
        print: true
      },
      manuscriptsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: true,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 1
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showOccurrences: false,
      useSimpleWorkMetadata: false
    }
  }
}