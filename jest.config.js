/*eslint-env node*/
module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
        "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
            "\\.(css|less|scss|sass|po)$": "identity-obj-proxy"
    },
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest",
            "^.+\\.js$": "babel-jest"
    },
    "globals": {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        }
    },
    "testMatch": [
        "**/__tests__/*.+(ts|tsx|js)"
    ]
}