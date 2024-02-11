function useCheckTutorial() {
    const showTutorialStorage = localStorage.getItem('TUTORIAL');
    if(showTutorialStorage === null ){
        return true;
    }
    localStorage.setItem('TUTORIAL', 'false');
    return false;
}

export { useCheckTutorial }