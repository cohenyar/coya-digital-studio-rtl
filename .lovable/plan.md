# תיקון "שליחה נכשלה" בטופס יצירת קשר

## הסיבה
הטופס שולח POST ל-`/api/public/send-contact`, שמשתמש ב-Gmail Connector כדי לשלוח מייל ל-`cohenyar21@gmail.com`. הקוד קורא שני משתני סביבה:
- `LOVABLE_API_KEY`
- `GOOGLE_MAIL_API_KEY`

שניהם קיימים ב-Lovable (לכן הפריוויו עובד), אבל **לא קיימים ב-Vercel** שם מתארח הדומיין `coyastudioai.com`. לכן השרת מחזיר 500 וכל מבקר רואה "שליחה נכשלה". זה לא קשור לתיבת המייל שלך.

## הפעולה (ידנית ב-Vercel — אני לא יכול לעשות אותה מכאן)

1. פותחים את שני הערכים מ-Lovable:
   - Project Settings → Secrets → מעתיקים את הערך של `LOVABLE_API_KEY`
   - Connectors → Google Mail → מעתיקים את הערך של `GOOGLE_MAIL_API_KEY`
2. ב-Vercel → הפרויקט → **Settings → Environment Variables**, מוסיפים את שניהם:
   - Name: `LOVABLE_API_KEY` · Value: (מ-Lovable) · Environments: Production + Preview
   - Name: `GOOGLE_MAIL_API_KEY` · Value: (מ-Lovable) · Environments: Production + Preview
3. Vercel → **Deployments → הדיפלוי האחרון → Redeploy** (חשוב — משתני סביבה נטענים רק בבילד חדש).

## אימות אחרי ה-Redeploy
- להיכנס ל-`https://www.coyastudioai.com/contact` מדפדפן פרטי, למלא ולשלוח.
- לפתוח DevTools → Network → הבקשה ל-`/api/public/send-contact` צריכה להחזיר `200` עם `{ "ok": true }`, ואמור להגיע מייל עם הנושא `yarin website` ל-`cohenyar21@gmail.com`.
- אם עדיין נכשל: לפתוח את הבקשה ב-Network, להעתיק את גוף התשובה ואת הסטטוס, ולשלוח לי — אתקן משם.

## שינויי קוד בפרויקט
אין. הקוד תקין; רק חסרים משתני הסביבה בסביבת ההרצה של Vercel.

## חלופה (למקרה שתעדיף לא לגעת ב-Vercel)
לעבור לספק מייל אחד — Resend — עם מפתח יחיד `RESEND_API_KEY`. אז אצטרך:
1. שתפתח חשבון Resend ותאמת דומיין (או להשתמש בדומיין ברירת המחדל של Resend לצורך פיתוח).
2. אקבל ממך את המפתח, אחליף את `send-contact` לשימוש ב-Resend, ותוסיף את המפתח גם ב-Vercel וגם ב-Lovable.
זה מסלול ארוך יותר — מומלץ רק אם לא רוצים לתחזק Gmail Connector.
