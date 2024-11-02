import EnrollSubjects from "./Task6Class";

describe('enrollemnt tests', () => {
    const enrollSubjects = new EnrollSubjects();

    before(() => {
        enrollSubjects.visitWebsite();
        enrollSubjects.login('bojan.krsteski+testq@climedo.de', 'Bojan123!');
        enrollSubjects.openStudy(' Bojan test ');
    });

    it('should enroll multiple subjects', () => {
        enrollSubjects.enrollMultipleSubjects(5);
    });
    it('should archive multiple subjects', () => {
        enrollSubjects.archiveEnrolledSubjects();
    }); 
});