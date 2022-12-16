# Use Packages **_ customize-cra _** and **_babel-plugin-module-resolver_** to customize point root folder

> Step 1

```
yarn add customize-cra react-app-rewired --dev
```

Create a **_ config-overrides.js _** file in the root directory

```
const {
    override, useBabelRc,
} = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
```

> Step 2

```
yarn add --dev babel-plugin-module-resolver
```

VS Code: Configure the path mapping in jsconfig.json (tsconfig.json for TypeScript), e.g.:

```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": ["src/*"]
        }
    }
}
```

Specify the plugin in your .babelrc with the custom root or alias. Here's an example:

```
{
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "~": "./src"
        }
      }
    ]
  ]
}
```


> You can use **_ "~/" _** to select **_ "./src/" _**
