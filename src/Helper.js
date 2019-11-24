export const symbols =
  "ｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝabcdefghijklmnopqrstuvwxyz01234567890ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
//shuffle a lang string
export const shuffle = a => {
  return a.split("").sort(() => (Math.random() > 0.5 ? -1 : 1));
};
//return a number between 10-40 depends on input if small return large if large return small
// example input = 10 return 52 or input between 38-40 return 10
// to do improve
export const oppositeNumber = num => {
  if (10 <= num && num <= 12) return 52;
  if (12 <= num && num <= 14) return 49;
  if (14 <= num && num <= 16) return 46;
  if (16 <= num && num <= 18) return 43;
  if (18 <= num && num <= 20) return 40;
  if (20 <= num && num <= 22) return 37;
  if (22 <= num && num <= 24) return 34;
  if (24 <= num && num <= 26) return 31;
  if (26 <= num && num <= 28) return 28;
  if (28 <= num && num <= 30) return 25;
  if (30 <= num && num <= 32) return 22;
  if (32 <= num && num <= 34) return 19;
  if (34 <= num && num <= 36) return 16;
  if (36 <= num && num <= 38) return 13;
  if (38 <= num && num <= 40) return 10;
};
