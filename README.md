# Heart-Failure-Prediction

We predicted Heart Failure using Machine Learning and a 1064 patient data-set. This work was done by Ankit Das, Gunjan Dhanuka, Abhiram Cherukupalli, Ananya Achanta and Sudhakar Potukuchi

# Introduction:
Diagnosis of Heart Failure with preserved Ejection Fraction (HFpEF) is difficult leading to delayed diagnosis and a high 23% 1-year mortality rate. The Heart Failure Association (HFA)-PEFF score is a multi-parameter approach to diagnose HFpEF. Currently, HFA-PEFF score use is limited to specialised HF units. Machine learning (ML) models were developed for a simple diagnosis of HFpEF even by a non-HF physician.

# Methods: 
ML models for HFpEF diagnosis were developed from a retrospective single center database of 418 hospitalized HFpEF patients over a 2-year (2019-20) period. The diagnostic performance of ML models - logistic regression (LR) and neural network (NN) has been compared with expert clinical diagnosis, HFA-PEFF score and in those with borderline HFA-PEFF score. Kappa statistic calculated to measure concordance between both scoring systems.

# Results:
15 significant variables identified have been utilized for the generation of ML model. ML models were compared to the standard diagnosis by expert clinical opinion and both ML models showed good sensitivity and specificity – LR (0.76 and 73)and NN (0.81 and 0.73) respectively. HFA-PEFF score identified 291 of the 418 (70%) HFpEF patients as borderline suggesting further workup for diagnosis. Compared to HFA-PEFF score, ML models exhibited good sensitivity (LR 0.97; NN 0.90) and positive predictive accuracy (ML 0.85; NN 0.93) with modest negative predictive accuracy of (LR 0.50; NN 0.57). Concordance by kappa statistic for those with a definite diagnosis by HFA-PEFF was 0.46 and 0.56 for the ML based models. For those categorized as borderline by HFA-PEFF score, ML models could identify 211of the 291 (72.5%) and failed to categorize 27% of patients further demonstrating the superiority.
# Conclusion:
Compared to the HFA-PEFF score, ML models could efficiently “rule-in” HFpEF with a good concordance. HFA-PEFF score conservatively identified 70% of patients as borderline. ML models exhibited better sensitivity, specificity, positive and negative predictive accuracy including in the group categorized as borderline by HFA-PEFF score. ML model based web app could be a good addition for the bedside diagnosis of HFpEF.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


