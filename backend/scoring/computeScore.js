function computeScore(analysis) {
  let score = 100;

  score -= analysis.issues.length * 10;

  return Math.max(score, 0);
}

export default computeScore;