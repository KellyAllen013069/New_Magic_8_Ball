1. So...when it runs like I have it, I get:

Access to fetch at 'http://localhost:5001/api/addUser' from origin 'http://localhost:3000' has been blocked by CORS policy: Method P0ST is not allowed by Access-Control-Allow-Methods in preflight response.


2. I changed it from retrieving it from input field bc it was telling me there was an error on the input 

react-dom.development.js:18687 The above error occurred in the <input> component:

    at input
    at div
    at form
    at div
    at header
    at div
    at App (http://localhost:3000/static/js/bundle.js:32:90)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ react-dom.development.js:18687
update.callback @ react-dom.development.js:18720
callCallback @ react-dom.development.js:13923
commitUpdateQueue @ react-dom.development.js:13944
commitLayoutEffectOnFiber @ react-dom.development.js:23391
commitLayoutMountEffects_complete @ react-dom.development.js:24688
commitLayoutEffects_begin @ react-dom.development.js:24674
commitLayoutEffects @ react-dom.development.js:24612
commitRootImpl @ react-dom.development.js:26823
commitRoot @ react-dom.development.js:26682
finishConcurrentRender @ react-dom.development.js:25892
performConcurrentWorkOnRoot @ react-dom.development.js:25809
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533
react-dom.development.js:2942 Uncaught Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.
    at assertValidProps (react-dom.development.js:2942:1)
    at setInitialProperties (react-dom.development.js:9920:1)
    at finalizeInitialChildren (react-dom.development.js:10950:1)
    at completeWork (react-dom.development.js:22193:1)
    at completeUnitOfWork (react-dom.development.js:26596:1)
    at performUnitOfWork (react-dom.development.js:26568:1)
    at workLoopSync (react-dom.development.js:26466:1)
    at renderRootSync (react-dom.development.js:26434:1)
    at recoverFromConcurrentError (react-dom.development.js:25850:1)
    at performConcurrentWorkOnRoot (react-dom.development.js:25750:1)
assertValidProps @ react-dom.development.js:2942
setInitialProperties @ react-dom.development.js:9920
finalizeInitialChildren @ react-dom.development.js:10950
completeWork @ react-dom.development.js:22193
completeUnitOfWork @ react-dom.development.js:26596
performUnitOfWork @ react-dom.development.js:26568
workLoopSync @ react-dom.development.js:26466
renderRootSync @ react-dom.development.js:26434
recoverFromConcurrentError @ react-dom.development.js:25850
performConcurrentWorkOnRoot @ react-dom.development.js:25750
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533