// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 基础 ESLint 推荐规则
  js.configs.recommended,

  // TypeScript 配置
  {
    files: ['**/*.ts', '**/*.tsx'], // 只对 TypeScript 文件应用
    languageOptions: {
      parser: tsParser, // 使用 TypeScript 解析器
      parserOptions: {
        ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
        sourceType: 'module', // 使用 ES 模块
        project: './tsconfig.json', // 指向你的 tsconfig.json，启用类型感知规则
      },
      globals: {
        node: true, // Node.js 全局变量
        es6: true, // ES6 全局变量
      },
    },
    plugins: {
      '@typescript-eslint': tseslint, // TypeScript ESLint 插件
    },
    rules: {
      // === 基础规则 ===
      'no-unused-vars': 'off', // 关闭基础规则，使用 TypeScript 版本 @typescript-eslint/no-unused-vars
      'no-console': 'error', // 禁止使用 console，避免在生产代码中留下调试语句
      'no-debugger': 'error', // 禁止使用 debugger，避免在生产代码中留下断点
      'no-alert': 'error', // 禁止使用 alert、confirm、prompt，这些是浏览器 API，Node.js 中不应使用
      eqeqeq: ['error', 'always'], // 要求使用 === 和 !==，禁止使用 == 和 !=
      'no-eval': 'error', // 禁止使用 eval()，存在安全风险
      'no-implied-eval': 'error', // 禁止使用隐式 eval（如 setTimeout('code')）
      'no-new-func': 'error', // 禁止使用 Function 构造函数，等同于 eval
      'no-script-url': 'error', // 禁止在链接中使用 javascript: URL
      'no-void': 'error', // 禁止使用 void 操作符
      'no-with': 'error', // 禁止使用 with 语句，影响性能且难以理解
      'prefer-const': 'error', // 优先使用 const，如果变量从未重新赋值
      'no-var': 'error', // 禁止使用 var，优先使用 let 或 const
      'prefer-arrow-callback': 'error', // 优先使用箭头函数作为回调
      'prefer-template': 'error', // 优先使用模板字符串而非字符串拼接
      'prefer-spread': 'error', // 优先使用扩展运算符而非 apply()
      'prefer-rest-params': 'error', // 优先使用剩余参数而非 arguments 对象
      'no-throw-literal': 'error', // 禁止抛出字面量，必须抛出 Error 对象
      'no-return-await': 'error', // 禁止不必要的 return await
      'require-await': 'error', // async 函数必须包含 await 表达式
      'no-async-promise-executor': 'error', // 禁止在 Promise 构造函数中使用 async 函数
      'no-await-in-loop': 'warn', // 警告在循环中使用 await，可能影响性能
      'no-promise-executor-return': 'error', // 禁止在 Promise 执行器中返回值
      'no-unreachable': 'error', // 禁止在 return、throw、continue、break 后出现不可达代码
      'no-unreachable-loop': 'error', // 禁止在循环中出现不可达代码
      'no-unsafe-finally': 'error', // 禁止在 finally 块中使用 return、throw、break、continue
      'no-unsafe-negation': 'error', // 禁止对关系运算符的左操作数使用否定运算符
      'no-useless-catch': 'error', // 禁止不必要的 catch 子句，如果只是重新抛出错误
      'no-useless-return': 'error', // 禁止不必要的 return 语句
      'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
      'no-duplicate-case': 'error', // 禁止 switch 语句中出现重复的 case 标签
      'no-empty': 'error', // 禁止空块语句
      'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符类
      'no-ex-assign': 'error', // 禁止对 catch 子句中的异常重新赋值
      'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
      'no-extra-semi': 'error', // 禁止不必要的分号
      'no-func-assign': 'error', // 禁止对函数声明重新赋值
      'no-inner-declarations': 'error', // 禁止在嵌套块中声明变量或函数
      'no-invalid-regexp': 'error', // 禁止在 RegExp 构造函数中使用无效的正则表达式字符串
      'no-irregular-whitespace': 'error', // 禁止使用不规则的空白符
      'no-obj-calls': 'error', // 禁止将全局对象当作函数进行调用
      'no-prototype-builtins': 'error', // 禁止直接调用 Object.prototype 的方法
      'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
      'no-sparse-arrays': 'error', // 禁止使用稀疏数组
      'no-template-curly-in-string': 'error', // 禁止在普通字符串中出现模板字面量占位符语法
      'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
      'no-unused-labels': 'error', // 禁止出现未使用的标签
      'no-useless-backreference': 'error', // 禁止在正则表达式中出现无用的反向引用
      'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
      'valid-typeof': 'error', // 强制 typeof 表达式与有效的字符串进行比较
      'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
      'consistent-return': 'error', // 要求 return 语句要么总是要么从不指定值
      'default-case': 'error', // 要求 switch 语句中有 default 分支
      'default-case-last': 'error', // 要求 default 分支在 switch 语句中最后出现
      'dot-notation': 'error', // 强制尽可能地使用点号
      'guard-for-in': 'error', // 要求 for-in 循环中有一个 if 语句
      'no-caller': 'error', // 禁止使用 arguments.caller 或 arguments.callee
      'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
      'no-empty-function': 'error', // 禁止出现空函数
      'no-empty-pattern': 'error', // 禁止使用空解构模式
      'no-eq-null': 'error', // 禁止在没有类型检查操作符的情况下与 null 进行比较
      'no-extend-native': 'error', // 禁止扩展原生对象
      'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
      'no-floating-decimal': 'error', // 禁止数字字面量中使用前导或末尾小数点
      'no-implicit-coercion': 'error', // 禁止使用短符号进行类型转换
      'no-implicit-globals': 'error', // 禁止在全局作用域下声明变量
      'no-iterator': 'error', // 禁止使用 __iterator__ 属性
      'no-labels': 'error', // 禁止使用标签语句
      'no-lone-blocks': 'error', // 禁止不必要的嵌套块
      'no-loop-func': 'error', // 禁止在循环中出现函数声明和表达式
      'no-magic-numbers': [
        'warn', // 禁止使用魔术数字，使用命名常量
        {
          ignore: [0, 1, -1], // 忽略常见的数字
          ignoreArrayIndexes: true, // 忽略数组索引
          ignoreDefaultValues: true, // 忽略默认值
        },
      ],
      'no-multi-assign': 'error', // 禁止使用连续赋值
      'no-multi-str': 'error', // 禁止使用多行字符串
      'no-new': 'error', // 禁止使用 new 操作符调用构造函数时不赋值
      'no-new-wrappers': 'error', // 禁止对 String、Number 和 Boolean 使用 new 操作符
      'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
      'no-param-reassign': 'error', // 禁止对函数参数进行重新赋值
      'no-proto': 'error', // 禁止使用 __proto__ 属性
      'no-redeclare': 'error', // 禁止多次声明同一变量
      'no-return-assign': 'error', // 禁止在 return 语句中使用赋值语句
      'no-self-assign': 'error', // 禁止自我赋值
      'no-self-compare': 'error', // 禁止自身比较
      'no-sequences': 'error', // 禁止使用逗号操作符
      'no-shadow': 'off', // 关闭基础规则，使用 TypeScript 版本 @typescript-eslint/no-shadow
      'no-shadow-restricted-names': 'error', // 禁止将标识符声明为受限的名字
      'no-ternary': 'off', // 允许三元运算符
      'no-undef-init': 'error', // 禁止将变量初始化为 undefined
      'no-undefined': 'off', // TypeScript 中允许 undefined
      'no-unused-expressions': 'error', // 禁止出现未使用的表达式
      'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
      'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性键
      'no-useless-concat': 'error', // 禁止不必要的字符串字面量或模板字面量的连接
      'no-useless-rename': 'error', // 禁止在 import 和 export 和解构赋值时将引用名相同的标识符重命名
      'no-warning-comments': 'warn', // 禁止在注释中使用特定的警告术语
      radix: 'error', // 强制在 parseInt() 使用基数参数
      'vars-on-top': 'off', // ES6+ 不需要，let/const 有块级作用域
      'wrap-iife': 'error', // 要求 IIFE 使用括号括起来
      yoda: 'error', // 要求或禁止 "Yoda" 条件
      complexity: ['error', { max: 15 }], // 限制圈复杂度，最大值为 15
      'max-depth': ['error', { max: 4 }], // 强制块语句的最大嵌套深度为 4
      'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }], // 强制文件的最大行数，最大值为 500
      'max-lines-per-function': ['warn', { max: 100, skipBlankLines: true, skipComments: true }], // 强制函数的最大行数，最大值为 100
      'max-nested-callbacks': ['error', { max: 4 }], // 强制回调函数的最大嵌套深度为 4
      'max-params': ['error', { max: 5 }], // 强制函数定义中最大参数个数为 5
      'max-statements': ['warn', { max: 20 }], // 强制函数块最多允许的语句数量为 20
      'max-statements-per-line': ['error', { max: 1 }], // 强制每一行中所允许的最大语句数量为 1

      // === TypeScript 规则 ===
      '@typescript-eslint/no-unused-vars': [
        'error', // 禁止未使用的变量
        {
          args: 'all', // 检查所有参数
          argsIgnorePattern: '^_', // 忽略以下划线开头的参数
          caughtErrors: 'all', // 检查所有 catch 子句中的错误
          caughtErrorsIgnorePattern: '^_', // 忽略以下划线开头的错误变量
          ignoreRestSiblings: true, // 忽略剩余兄弟元素
          varsIgnorePattern: '^_', // 忽略以下划线开头的变量
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'error', // 禁止使用非空断言操作符 !
      '@typescript-eslint/no-unnecessary-type-assertion': 'error', // 禁止不必要的类型断言
      '@typescript-eslint/prefer-as-const': 'error', // 优先使用 as const 而不是类型断言
      '@typescript-eslint/no-array-constructor': 'error', // 禁止使用 Array 构造函数
      '@typescript-eslint/no-duplicate-enum-values': 'error', // 禁止枚举成员具有重复的值
      '@typescript-eslint/no-empty-interface': 'error', // 禁止声明空的接口
      '@typescript-eslint/no-extra-non-null-assertion': 'error', // 禁止不必要的非空断言
      '@typescript-eslint/no-for-in-array': 'error', // 禁止对数组使用 for-in 循环
      '@typescript-eslint/no-implied-eval': 'error', // 禁止使用隐式 eval
      '@typescript-eslint/no-inferrable-types': 'error', // 禁止可以推断类型的显式类型注解
      '@typescript-eslint/no-loss-of-precision': 'error', // 禁止数字字面量丢失精度
      '@typescript-eslint/no-misused-new': 'error', // 禁止在接口或类型字面量中使用 new
      '@typescript-eslint/no-namespace': 'error', // 禁止使用自定义 TypeScript 模块和命名空间
      '@typescript-eslint/no-this-alias': 'error', // 禁止对 this 使用别名
      '@typescript-eslint/no-unnecessary-type-arguments': 'error', // 禁止不必要的泛型类型参数
      '@typescript-eslint/no-unsafe-declaration-merging': 'error', // 禁止不安全的声明合并
      '@typescript-eslint/no-var-requires': 'error', // 禁止使用 require 语句，除非在 import 语句中
      '@typescript-eslint/prefer-for-of': 'error', // 优先使用 for-of 循环
      '@typescript-eslint/prefer-function-type': 'error', // 优先使用函数类型而不是接口
      '@typescript-eslint/prefer-namespace-keyword': 'error', // 优先使用 namespace 关键字而不是 module
      '@typescript-eslint/prefer-optional-chain': 'error', // 优先使用可选链运算符 ?.
      '@typescript-eslint/prefer-reduce-type-parameter': 'error', // 优先使用 reduce 的类型参数
      '@typescript-eslint/prefer-return-this-type': 'error', // 优先使用 this 类型而不是接口
      '@typescript-eslint/prefer-string-starts-ends-with': 'error', // 优先使用 String#startsWith 和 String#endsWith
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 优先使用 @ts-expect-error 而不是 @ts-ignore
      '@typescript-eslint/restrict-plus-operands': 'error', // 限制 + 操作符的操作数类型
      '@typescript-eslint/restrict-template-expressions': 'error', // 限制模板表达式中的类型
      '@typescript-eslint/triple-slash-reference': 'error', // 禁止使用 /// <reference path="" />
      '@typescript-eslint/unified-signatures': 'error', // 要求函数重载签名合并
      '@typescript-eslint/no-shadow': 'error', // 禁止变量声明与外层作用域的变量同名
      '@typescript-eslint/explicit-function-return-type': [
        'warn', // 要求函数显式返回类型
        {
          allowExpressions: true, // 允许表达式函数
          allowTypedFunctionExpressions: true, // 允许类型化的函数表达式
          allowHigherOrderFunctions: true, // 允许高阶函数
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error', // 禁止浮动的 Promise，必须被处理
      '@typescript-eslint/no-misused-promises': [
        'error', // 禁止误用 Promise
        {
          checksVoidReturn: false, // 不检查 void 返回类型
        },
      ],
      '@typescript-eslint/await-thenable': 'error', // 禁止对非 Promise 值使用 await
      '@typescript-eslint/no-confusing-void-expression': 'error', // 禁止混淆的 void 表达式
      '@typescript-eslint/no-meaningless-void-operator': 'error', // 禁止无意义的 void 操作符
      '@typescript-eslint/no-unused-expressions': 'error', // 禁止未使用的表达式
      '@typescript-eslint/prefer-promise-reject-errors': 'error', // 要求 Promise 拒绝错误
      '@typescript-eslint/require-await': 'error', // 要求 async 函数中有 await 表达式
      '@typescript-eslint/return-await': ['error', 'in-try-catch'], // 要求 return await 在 try-catch 中

      // === 代码风格 ===
      quotes: ['error', 'single', { avoidEscape: true }], // 强制使用单引号，允许字符串包含单引号时使用双引号
      semi: ['error', 'always'], // 要求或禁止使用分号，强制使用分号
      'comma-dangle': ['error', 'always-multiline'], // 要求或禁止末尾逗号，多行时强制使用
      'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
      'comma-style': ['error', 'last'], // 强制使用一致的逗号风格，逗号在行尾
      'computed-property-spacing': ['error', 'never'], // 强制在计算的属性的方括号中使用一致的空格
      'func-call-spacing': ['error', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
      'keyword-spacing': ['error', { before: true, after: true }], // 强制在关键字前后使用一致的空格
      'object-curly-spacing': ['error', 'always'], // 强制在大括号内使用一致的空格
      'space-before-blocks': ['error', 'always'], // 强制在块之前使用一致的空格
      'space-before-function-paren': [
        'error', // 强制在 function 的左括号之前使用一致的空格
        {
          anonymous: 'always', // 匿名函数需要空格
          named: 'never', // 命名函数不需要空格
          asyncArrow: 'always', // 异步箭头函数需要空格
        },
      ],
      'space-in-parens': ['error', 'never'], // 强制在圆括号内使用一致的空格
      'space-infix-ops': 'error', // 要求操作符周围有空格
      'space-unary-ops': ['error', { words: true, nonwords: false }], // 强制在一元操作符前后使用一致的空格
      'spaced-comment': ['error', 'always'], // 强制在注释中 // 或 /* 使用一致的空格
      'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
      'block-spacing': ['error', 'always'], // 强制在单个语句块中使用一致的空格
      'brace-style': ['error', '1tbs', { allowSingleLine: false }], // 强制使用一致的大括号风格，不允许单行块
      'eol-last': ['error', 'always'], // 要求或禁止文件末尾存在空行
      indent: [
        'error', // 强制使用一致的缩进
        2, // 使用 2 个空格
        {
          SwitchCase: 1, // switch 语句的 case 子句缩进 1 个空格
          VariableDeclarator: 1, // 变量声明缩进 1 个空格
          outerIIFEBody: 1, // 外层 IIFE 主体缩进 1 个空格
          MemberExpression: 1, // 成员表达式缩进 1 个空格
          FunctionDeclaration: { parameters: 1, body: 1 }, // 函数声明参数和主体缩进 1 个空格
          FunctionExpression: { parameters: 1, body: 1 }, // 函数表达式参数和主体缩进 1 个空格
          CallExpression: { arguments: 1 }, // 调用表达式参数缩进 1 个空格
          ArrayExpression: 1, // 数组表达式缩进 1 个空格
          ObjectExpression: 1, // 对象表达式缩进 1 个空格
          ImportDeclaration: 1, // import 声明缩进 1 个空格
          flatTernaryExpressions: false, // 不扁平化三元表达式
          ignoreComments: false, // 不忽略注释
        },
      ],
      'linebreak-style': ['error', 'unix'], // 强制使用 Unix 换行符 (\n)
      'max-len': [
        'warn', // 强制一行的最大长度
        {
          code: 120, // 代码最大长度为 120 字符
          tabWidth: 2, // 制表符宽度为 2
          ignoreUrls: true, // 忽略 URL
          ignoreStrings: true, // 忽略字符串
          ignoreTemplateLiterals: true, // 忽略模板字面量
          ignoreRegExpLiterals: true, // 忽略正则表达式字面量
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }], // 禁止出现多行空行，最多 2 行，文件末尾最多 1 行
      'no-trailing-spaces': 'error', // 禁止行尾空格
      'padded-blocks': ['error', 'never'], // 禁止或要求在块内填充空行
      'padding-line-between-statements': [
        'error', // 要求或禁止在语句间填充空行
        { blankLine: 'always', prev: '*', next: 'return' }, // return 前必须有空行
        { blankLine: 'always', prev: '*', next: 'throw' }, // throw 前必须有空行
        { blankLine: 'always', prev: 'directive', next: '*' }, // 指令后必须有空行
        { blankLine: 'any', prev: 'directive', next: 'directive' }, // 指令之间可以有任意空行
      ],
    },
  },
];
