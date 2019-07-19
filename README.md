# ant-design-admin-basic
使用ant design pro搭建的基础脚手架工程，包含登录、菜单、权限、mock等基本功能。

去掉了ant-design-admin工程中的示例代码以及无用的组件。

适合前端admin工程搭建时使用。
## Project Structure
```
- config
  - config.js
- mock
  (mock api for development)
- src
  - assets
  - components
    (common components from antd or other community)
  - models
    (model related operation)
  - pages
    (view related)
  - services
    (send HTTP requests)
  - utils
    (utils for project)
.editorconfig
.gitignore
package.json
package-lock.json
README.md
```

## Usage

```bash
$ git clone https://sipeng.zhu@git.rakuten-it.com/scm/dsd/cdna-platform-client.git
$ cd cdna-client
$ npm install
$ npm start         # visit http://localhost:8000
```
