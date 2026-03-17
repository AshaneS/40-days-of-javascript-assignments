# let can be reassigned

- changed userName → works
- reassigned the entire student object → works

# const cannot be re-assigned

- age = 40 → ❌ error
- person = { ... } → ❌ error

# const with objects/arrays

- can modify properties inside

- person.name = "Mark" → ✅ allowed

- person_marks[0] = 350 → ✅ allowed

- person = { ... } → ❌ error

# Objects/arrays

- teacher.name = "Alex" → also changes student.name

- teacher_scores[0] = 250 → also affects student_scores
