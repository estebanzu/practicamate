# SCHEMA.md

## Entidades principales

### PracticeUnit
```ts
{
  id: string;
  title: string;
  subject: string;
  description: string;
  theory: TheorySection[];
  exercises: Exercise[];
}
```

### TheorySection
```ts
{
  title: string;
  contentLatex: string;
  examples: {
    title: string;
    statementLatex: string;
    solutionLatex: string;
  }[];
}
```

### Exercise
```ts
{
  id: string;
  title: string;
  statementLatex: string;
  options: ExerciseOption[];
  steps: Step[];
}
```

### ExerciseOption
```ts
{
  id: string;
  labelLatex: string;
  isCorrect: boolean;
  feedback?: string;
}
```

### Step
```ts
{
  stepNumber: number;
  explanation: string;
  mathLatex?: string;
}
```

## Contratos de estado

### PracticeProgress
```ts
{
  byExercise: Record<
    string,
    {
      attempts: number;
      solved: boolean;
      lastAnswer: string | null;
    }
  >;
}
```

Storage key por práctica: `practicas-matematica:progress:v1:<practiceId>`.

## Componentes y contratos UI relevantes
- `PracticeCatalog`: `{ practices: PracticeUnit[] }`.
- `PracticeCard`: `{ practice: PracticeUnit }`.
- `TheoryView`: `{ practice: PracticeUnit; embedded?: boolean }`.
- `ExerciseRunner`: `{ practice: PracticeUnit }`.
- `LatexRenderer`: `{ content: string; className?: string }`.
