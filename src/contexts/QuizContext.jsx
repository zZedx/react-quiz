import { createContext, useContext } from 'react';

const QuizContext = createContext();

function QuizProvider({ children }) {

    return (
        <QuizContext.Provider>
            {children}
        </QuizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuiz must be used within an AuthProvider');
    }
    return context;
}

export { QuizProvider, useQuiz };