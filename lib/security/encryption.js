import crypto from 'crypto';

const IV_LENGTH = 16; // AES block size (16 bytes)

if (!process.env.ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY is not defined in environment variables');
}

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'base64'); // 32 bytes for AES-256

const encrypt = (text) => {
  if (typeof crypto.randomBytes !== 'function') {
    throw new Error('crypto.randomBytes is not available');
  }

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted,
  };
};

const decrypt = (encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    ENCRYPTION_KEY,
    Buffer.from(iv, 'hex')
  );
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

export { encrypt, decrypt };
