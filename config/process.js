const devConfig = {
PORT: process.env.PORT || 1000,
MongoCon : 'mongodb+srv://medical:express@medicalexpresscluster-hkv5p.mongodb.net/myasasa?retryWrites=true&w=majority',
secretKey: 123321
};
module.exports = devConfig;

// mongodb+srv://medical:express@medicalexpresscluster-hkv5p.mongodb.net/medicalexpress?retryWrites=true&w=majority
// mongodb://localhost/myasasa 