# Digs Calendar Code Challenge

This is the candaidate test for Digs UI developers. It is NOT pass/fail. It is intended to provide insight into the range of your skill set. Please do what you can.
Read ALL bullet points.

## Get started

1. Install dependencies
   ```bash
   npm install
   or
   yarn
   ```
2. Start the app
   ```bash
    npx expo start
   ```

## Here are the guidelines for the test:

- Fork this repository to your personal GitHub account.
- Build the project locally
- Use the [Figma Design File](https://www.figma.com/design/dGQWEfieWDpRTMLvbBKer8/Calendar-Code-Challenge?node-id=0-1&t=G5AppazVVDSr5dBl-1) for UI guidance

## Tasks to be completed:

1. GET data from https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge
2. Follow and implement the Figma Calendar design for the "index.tsx"
3. Make each calendar card navigate to a Details page (must create Details page from scratch)
4. In the Details page, the Service Title should be editable and Posted to the database when the Save Changes button is pressed. POST https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge (the post requires the body to be the object returned from the GET)
5. The Calendar should refelect Service Name changes
   !! If you need to reset the data, POST to this link: https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge/reset
