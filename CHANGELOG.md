# fontace

## 0.4.0

### Minor Changes

- [#45](https://github.com/delucis/fontace/pull/45) [`b4483f4`](https://github.com/delucis/fontace/commit/b4483f4f05ce81e464453d9a82fa8acf9c66ac6d) Thanks [@delucis](https://github.com/delucis)! - Makes `fontace` install size smaller by switching to a lighter weight font metadata extraction library

## 0.3.1

### Patch Changes

- [#14](https://github.com/delucis/fontace/pull/14) [`7c0cf8b`](https://github.com/delucis/fontace/commit/7c0cf8b42706d65031642212dcb86b899e6c5745) Thanks [@delucis](https://github.com/delucis)! - No code changes. This release is the first published using OIDC trusted publisher configuration for improved security.

## 0.3.0

### Minor Changes

- [#8](https://github.com/delucis/fontace/pull/8) [`786d3f7`](https://github.com/delucis/fontace/commit/786d3f7e4e1e760a0f7fbaa66f24af5436e2d433) Thanks [@delucis](https://github.com/delucis)! - Adds a new `unicodeRangeArray` property for use cases where access to each range in `unicodeRange` is needed

## 0.2.2

### Patch Changes

- [`86f07fe`](https://github.com/delucis/fontace/commit/86f07fe4ee9adbf56ab3af69dd1d45ac89d4a040) Thanks [@delucis](https://github.com/delucis)! - Updates `@types/fontkit` internal dependency

## 0.2.1

### Patch Changes

- [`18c433e`](https://github.com/delucis/fontace/commit/18c433e6aa1283e5dad9c1cafb6975ffb7689dbc) Thanks [@delucis](https://github.com/delucis)! - Improves JSDoc comments on the metadata returned by `fontace`

## 0.2.0

### Minor Changes

- [`b7f05e8`](https://github.com/delucis/fontace/commit/b7f05e807652c8881278d5f81f74d9cce21a3f55) Thanks [@delucis](https://github.com/delucis)! - Adds an `isVariable` property to the metadata returned by `fontace`, which can be used to decide whether to include `tech(variations)` in `@font-face`.

- [`36bdc86`](https://github.com/delucis/fontace/commit/36bdc863edab27baf350c1aaca2cf835134de6a2) Thanks [@delucis](https://github.com/delucis)! - Adds a `format` property to the metadata returned by `fontace`, which can be used when creating `format()` values for `@font-face`.

### Patch Changes

- [`fa46176`](https://github.com/delucis/fontace/commit/fa461763c9285d57feed1baccdd514205673b335) Thanks [@delucis](https://github.com/delucis)! - Fixes the return type of `fontace()`

## 0.1.0

### Minor Changes

- [`6f4f9d5`](https://github.com/delucis/fontace/commit/6f4f9d578a0c490676b9dc6ce2feede703315645) Thanks [@delucis](https://github.com/delucis)! - Initial release
