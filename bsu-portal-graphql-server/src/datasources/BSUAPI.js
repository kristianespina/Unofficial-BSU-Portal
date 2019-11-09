const { RESTDataSource } = require('apollo-datasource-rest');
class BSUAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://dione.batstate-u.edu.ph/public/sites/apps/student/';
    }

    async records(srcode) {
        const response = JSON.parse(await this.get(`ajax.php?do=fetch_enrollment_records&schoolyear=2018-2019&semester=FIRST&srcode=${srcode}`))
        return Array.isArray(response)
        ? response.map(enrollmentData => this.recordReducer(enrollmentData))
        : [];
    }
    recordReducer(enrollmentData) {
        return {
            lastname: enrollmentData.lastname,
            firstname: enrollmentData.firstname,
            middlename: enrollmentData.middlename,
            sex: enrollmentData.sex,
            schoolyear: enrollmentData.schoolyear,
            semester: enrollmentData.semester,
            srcode: enrollmentData.srcode,
            school: enrollmentData.school,
            campus: enrollmentData.campus,
            collegecode: enrollmentData.collegecode,
            coursecode: enrollmentData.coursecode,
            coursename: enrollmentData.coursename,
            majorcode: enrollmentData.majorcode,
            majorname: enrollmentData.majorname,
            yearlevel: enrollmentData.yearlevel,
            curriculum: enrollmentData.curriculum,
            enrollmentstatus: enrollmentData.enrollmentstatus,
        };
    }

    async grades(srcode,schoolyear,semester) {
        const response = JSON.parse(await this.get(`ajax.php?do=fetch_grades&schoolyear=${schoolyear}&semester=${semester}&srcode=${srcode}`))

        return (response)
        ? response.map(enrollmentData => this.gradeReducer(enrollmentData))
        : [];
    }

    gradeReducer(grade) {
        return {
            code: grade.subject_code,
            description: grade.subject_description,
            credits: grade.subject_credits,
            grade_final: grade.grade_final,
            grade_reexam: grade.grade_reexam,
            status: grade.status,
            schoolyear: grade.schoolyear,
            semester: grade.semester,
            instructor: grade.instructor_name,
            section: grade.class_section,
            fullname: grade.fullname,
        }
    }
}

module.exports = BSUAPI;