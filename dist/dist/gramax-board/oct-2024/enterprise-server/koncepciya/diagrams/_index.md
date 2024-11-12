---
order: 5
title: Диаграмма элементов
---

```dsl
workspace {

    model {
        reader = person "Читатель" "Пользователь, который пользуется системой только для чтения документации"
        editor = person "Редактор" "Пользователь, который пользуется системой для чтения и обновления документации"

        webEditor = softwareSystem "Web Editor" "Браузерное приложение для редактирования (SPA)" "Client"
        desktopEditor = softwareSystem "Desktop Editor" "Десктопное приложение для редактирования" "Client"

        gramaxEnterpriseProviderServer = softwareSystem "Gramax Enterprise Provider Server" "Сервер определяющий по какому URL-у находится GES-ы"

        gitServer = softwareSystem "Git Server" "Хранилище каталогов (GitLab/GitHub/Gitea/...)" 
        ssoProvider = softwareSystem "SSO Provider" "Keycloak/Azure/Yandex SSO/..."        

        gramaxServer = softwareSystem "Gramax Server" "Сервер Gramax" "Server" {
            gramaxEnterpriseService = container "Gramax Enterprise Service" "Сервис реализующий enterprise решение в Gramax" "Node.js" "Service"
            
            docPortal = container "Doc Portal" "Приложение для чтения и публикации каталогов" "Node.js" "Service"
            fileSystem = container "File System" "Файловая система в Gramax-Server" "OS" "Folder"
        }


        editor -> webEditor "Редактирует и ревьюит каталоги, публикует изменения" "HTTPS"
        editor -> desktopEditor "Редактирует и ревьюит каталоги, публикует изменения"
        reader -> docPortal "Читает опубликованные каталоги" "HTTPS"
        
        webEditor -> gramaxEnterpriseService "Клонирует, пулит и пушит репозитории" "HTTPS: GIT->GIT"
        webEditor -> gramaxEnterpriseService "Авторизируется чтобы зайти в воркспейс организации. Клонирует, пулит и пушит репозитории" "HTTPS"
        webEditor -> gramaxEnterpriseProviderServer "Получает информацию о том, где находится нужный GES" "HTTPS"

        desktopEditor -> gitServer "Клонирует, пулит и пушит репозитории" "HTTPS, SSH: GIT->GIT"
        desktopEditor -> gramaxEnterpriseService "Авторизируется чтобы зайти в воркспейс организации" "HTTPS"
        desktopEditor -> gramaxEnterpriseProviderServer "Получает информацию о том, где находится нужный GES" "HTTPS"

        docPortal -> gitServer "Клонирует и пулит репозитории" "HTTPS, SSH: GIT->GIT"
        docPortal -> fileSystem "Хранит каталоги" "OS API"
        docPortal -> gramaxEnterpriseService "Перенаправляет пользователя для входа по SSO" "HTTPS"

        gramaxEnterpriseService -> ssoProvider "Перенаправляет пользователя для получения его данных" "HTTPS"
        gramaxEnterpriseService -> gitServer "Проксирует клон, пул и пуш репозиториев" "HTTPS: GIT->GIT"

        deploymentEnvironment "Enterprise Solution" {
            deploymentNode "Gramax Server" "" "Container" {
                fileSystemInstance = containerInstance fileSystem

                deploymentNode "Nginx proxy" "Проксирует все запросы к сервисам" "" {
                    deploymentNode "Docker Container - Doc Portal" "" "Docker" {
                        docPortalServerInstance = containerInstance docPortal
                    }
                    deploymentNode "Docker Container - Gramax Enterprise Service" "" "Docker" {
                        gramaxEnterpriseServiceInstance = containerInstance gramaxEnterpriseService
                    }
                }
            }
            
            deploymentNode "Editor Laptop - Desktop Editor" "" "Microsoft Windows or Apple macOS" "" {
                softwareSystemInstance desktopEditor
            }
            deploymentNode "Web Browser" "" "Chrome, Firefox, Safari, or Edge" "" {
                softwareSystemInstance webEditor
            }
        }
    }

    views {
        systemLandscape "SystemLandscape" {
            include *
            autoLayout
        }

        container gramaxServer {
            include *
            autoLayout
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
                color #ffffff
                shape WebBrowser
                background #438dd5
            }

            element "Server" {
                color #ffffff
                background #1168bd
            }
            
            element "Service" {
                shape Hexagon
                background #74d2f4
            }

            element "Folder" {
                shape Folder
                color #ffffff
                background #03bfa3
            }
        }
    }
}
```