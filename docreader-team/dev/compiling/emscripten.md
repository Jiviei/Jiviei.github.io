---
order: 1
title: "Браузер: wasm emscripten"
---

## Компиляция

`manifest-path` [comment:2]можно[/comment] не указывать, если текущая директория - `apps/browser/wasm`

```
cargo +nightly build \
	--target wasm32-unknown-emscripten \
	--release -Zbuild-std \
	--manifest-path apps/browser/wasm/Cargo.toml
```

## Установка зависимостей

[Установить emscripten-sdk](https://emscripten.org/docs/getting_started/downloads.html) при помощи пакетного менеджера или вручную. Лучше через пакетный [comment:1]менеджер[/comment].

`brew`: `brew install emscripten`

Ручная установка:

```bash
git clone https://github.com/emscripten-core/emsdk.git && \
   cd emsdk && \
   ./emsdk install latest && \
   ./emsdk activate latest
```

### Установка тулчейна

Для этого необходим установленный [rustup]().

```
 rustup toolchain install nightly
 rustup +nightly component add rust-src
 rustup +nightly target add wasm32-unknown-emscripten
```

### Кеширование zlib

При вызове из cargo, emcc не всегда скачивает необходимые зависимости. Нужно скомпилировать любой файл с флагом `-sUSE_ZLIB=1`

```
touch x.c && emcc x.c -sUSE_ZLIB=1 -o /dev/null && rm x.c
```