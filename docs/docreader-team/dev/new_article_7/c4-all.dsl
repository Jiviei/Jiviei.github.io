workspace {

    model {
        reader = person "Читатель" "Пользователь, который пользуется системой только для чтения"
        editor = person "Редактор" "Пользователь, который пользуется системой для чтения и редактирования"

        desktopEditApp = softwareSystem "Desktop Edit App" "Десктопное приложение для редактирования" "Client"
        webEditApp = softwareSystem "Web Edit App" "Браузерное приложение для редактирования (SPA)" "Client"
        docPortalClient = softwareSystem "DocPortal Client" "Клиентская часть DocPortal" "Client"

        gitServer = softwareSystem "Git Server" "GitLab, GitHub, Gitea" "Server"
        ssoProvider = softwareSystem "SSO Provider" "Keycloak, Azure, Yandex SSO" "Server"
        gramaxServer = softwareSystem "Gramax Server" "Сервер Gramax" "Server" {
            fileSystem = container "File System" "Файловая система в Gramax-Server" "OS" "Folder"
            cors = container "CORS" "Сервис CORS-проксирования" "NodeJS" "Service"
            auth = container "Auth" "Сервис входа в Git Server по OAuth" "NodeJS""Service"
            review = container "Review" "Сервис формирования ссылок для ревью" "NodeJS" "Service"
            sso = container "SSO" "Сервис для обертки различных SSO Provider-ов" "NodeJS" "Service"
            docPortalServer = container "DocPortal Server" "Серверная часть DocPortal" "NodeJS" "Service"
            webEditAppServer = container "Web Edit App Server" "Сервер для Web Edit App" "NodeJS" "Service"
            diagramRenderer = container "Diagram Renderer" "Сервис для рендеринга диаграмм" "NodeJS" "Service"
            c4Structurizr = container "C4 Structurizr" "Сервис для рендеринга C4-structurizr диаграмм" "Java" "Service"
        }

        editor -> webEditApp "Для редактирования документов прямо в браузере"
        editor -> desktopEditApp "Для редактирования документов в десктопном приложении"
        editor -> docPortalClient "Для обновляения документов в DocPortal и чтения документации"
        reader -> docPortalClient "Для чтения документациик в DocPortal"

        webEditApp -> auth "Для входа в Git server по OAuth"
        webEditApp -> review "Для формирования ссылки ревью"
        webEditApp -> diagramRenderer "Для рендера C4-Structurizr и TS-diagram"
        webEditApp -> cors "Для проксирования запросов в Git server (если Git server блокирует CORS запросы)"
        webEditApp -> gitServer "Для клонирования, пула и пуша репозиториев (если Git server не блокирует CORS запросы)"

        desktopEditApp -> auth "Для входа в Git server по OAuth"
        desktopEditApp -> review "Для формирования ссылку для ревью"
        desktopEditApp -> gitServer "Для клонирования, пула и пуша репозиториев"
        desktopEditApp -> diagramRenderer "Для рендера C4-Structurizr и TS-diagram"

        docPortalClient -> auth "Для входа в Git server по OAuth"
        docPortalClient -> docPortalServer "Для получения данных по каталогам и обновления документации"

        docPortalServer -> gitServer "Для клонирования и пула репозиториев"
        docPortalServer -> diagramRenderer "Для рендера C4-Structurizr и TS-diagram"
        docPortalServer -> fileSystem "Для хранения локальных (относительно Git server) репозиториев"
        docPortalServer -> sso "Для входа по SSO и получения прав на чтение приватной документации"

        review -> gitServer "Для клонирования, пула и пуша репозиториев"
        review -> fileSystem "Для хранения локальных (относительно Git server) обычных и ревью репозиториев"

        auth -> gitServer "Для получения данных пользователя с Git server"

        sso -> ssoProvider "Для получения данных пользователя и его прав"

        diagramRenderer -> c4Structurizr "Для рендера диаграмм C4-structurizr"

        cors -> gitServer "Проксирует запросы на GitServer"

        webEditAppServer -> webEditApp "Предоставляет Web Edit App"


        deploymentEnvironment "Enterprise Solution" {
            deploymentNode "Gramax Server" "" "Alpine Container" {
                developerApiApplicationInstance = containerInstance fileSystem

                deploymentNode "Nginx proxy" "Проксирует все запросы к сервисам" "" {
                    deploymentNode "Docker Container - Web Server" "" "Docker" {
                        docPortalServerInstance = containerInstance docPortalServer
                    }
                    deploymentNode "Docker Container - Web Edit App Server" "" "Docker" {
                        webEditAppServerInstance = containerInstance webEditAppServer
                    }
                    deploymentNode "Docker Container - Diagram-renderer" "" "Docker" {
                        diagramRendererInstance = containerInstance diagramRenderer
                    }
                    deploymentNode "Docker Container - C4-Structurizr" "" "Docker" {
                        c4StructurizrInstance = containerInstance c4Structurizr
                    }
                    deploymentNode "Docker Container - Review" "" "Docker" {
                        reviewInstance = containerInstance review
                    }
                    deploymentNode "Docker Container - SSO" "" "Docker" {
                        ssoInstance = containerInstance sso
                    }
                    deploymentNode "Docker Container - CORS" "" "Docker" {
                        corsInstance = containerInstance cors
                    }
                    deploymentNode "Docker Container - Auth" "" "Docker" {
                        authInstance = containerInstance auth
                    }
                }
            }
            
            deploymentNode "Editor Laptop - Desktop Edit App" "" "Microsoft Windows or Apple macOS" "" {
                softwareSystemInstance desktopEditApp
            }
            deploymentNode "Web Browser" "" "Chrome, Firefox, Safari, or Edge" "" {
                softwareSystemInstance webEditApp
                softwareSystemInstance docPortalClient
            }

            deploymentNode "Enterprise Server" "" "" "" {
                softwareSystemInstance gitServer
                softwareSystemInstance ssoProvider
            }
        }
    }

    views {
        systemlandscape "SystemLandscape" {
            include *
            autoLayout
        }

        container gramaxServer {
            include *
            autolayout
        }

        deployment gramaxServer "Enterprise Solution" {
            include *
            autoLayout
        }

        styles {
            element "Person" {
                color #ffffff
                fontSize 22
                shape Person
                background #08427b
            }

            element "Client" {
                shape WebBrowser
                background #85bbf0
            }

            element "Server" {
                shape Component
                background #0D597A
            }
            
            element "Service" {
                shape Component
                background #1168bd
            }

            element "Folder" {
                shape Folder
                background #795940
            }
        }
    }
}
