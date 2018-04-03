# auth/Login.vue
> NOTE: this docs defined at **docs** section inside **test/storybook**

## Description
Component to registrer new users or login registred users

## Properties

| propName | propType | defaultValue | isRequired | Posibles values |
| --- | --- | --- | --- | --- |
| mode | String | signin | false | signin, signup |

## Usage
```js
import Login from '@/modules/auth/components/Login';

<Login :mode="signup" />
```
