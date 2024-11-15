---
order: 8
title: Компиляция
---

Для управления  версиями `rustc` и `cargo` используется [rustup](https://rustup.rs/).

## Компоненты и таргеты

-  nightly-тулчейн: `rustup toolchain install nightly`

-  wasm32-unknown-emscripten: `rustup +nightly target add wasm32-unknown-emscripten`

-  rust-src: `rustup +nightly component add rust-src`

## Утилиты

warp-spa (исходный код хранится в нашем репозитории): `cargo install --path rbins/warp-spa`

tauri-cli (форк-зеркало tauri): `cargo install tauri-cli --git https://github.com/gram-ax/tauri --locked`

## Кросс-компиляция maсos -> windows

Нужны библиотеки windows, для чего используется `xwin`. Нужно установить оба, они разные:

-  `cargo install xwin`

-  `brew install xwin`

Скачать библиотеки при помощи `xwin splat`, затем можно компилировать при помощи cargo:

-  Tauri: `cargo tauri build --target x86_64-pc-windows-msvc --runner cargo-xwin`

-  Библиотеки: `cargo xwin build --target x86_64-pc-windows-msvc`