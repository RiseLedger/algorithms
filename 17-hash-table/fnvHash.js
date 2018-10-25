function fnvHash(value, size) {
  const fnvOffsetBasis = 2166136261;
  const fnvPrime = 16777619;
  let hash = fnvOffsetBasis;

  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash *= fnvPrime;
  }

  return Math.abs(hash);
}

module.exports = fnvHash;
