module.exports = {
    setupFiles: ['./src/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transform: {
        '^.+.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '.(css|scss)$': 'identity-obj-proxy',
    },
};
