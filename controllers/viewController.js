const catchAsync = require('./../utils/catchAsync');
const User = require('./../model/userModel');
const Result = require('./../model/resultModel');
const Course = require('./../model/courseModel');

exports.getDashBoardForm = async (req, res, next) => {
  const part1oddSemester = await Result.find({
    studentId: req.user.studentId,
    part: '1',
    semester: 'odd'
  });

  const part1evenSemester = await Result.find({
    studentId: req.user.studentId,
    part: '1',
    semester: 'even'
  });

  const part2oddSemester = await Result.find({
    studentId: req.user.studentId,
    part: '2',
    semester: 'odd'
  });

  const part2evenSemester = await Result.find({
    studentId: req.user.studentId,
    part: '2',
    semester: 'even'
  });

  const part3oddSemester = await Result.find({
    studentId: req.user.studentId,
    part: '3',
    semester: 'odd'
  });

  const part3evenSemester = await Result.find({
    studentId: req.user.studentId,
    part: '3',
    semester: 'even'
  });

  const part4oddSemester = await Result.find({
    studentId: req.user.studentId,
    part: '4',
    semester: 'odd'
  });

  const part4evenSemester = await Result.find({
    studentId: req.user.studentId,
    part: '4',
    semester: 'even'
  });

  res.status(200).render('dashboard', {
    title: 'Dashboard | The World of RU CSE 26',
    _1partOddSem: part1oddSemester,
    _1partEvenSem: part1evenSemester,
    _2partOddSem: part2oddSemester,
    _2partEvenSem: part2evenSemester,
    _3partOddSem: part3oddSemester,
    _3partEvenSem: part3evenSemester,
    _4partOddSem: part4oddSemester,
    _4partEvenSem: part4evenSemester
  });

  console.log(part1oddSemester);
};

exports.getAdminPreviewResultForm = async (req, res, next) => {
  const data = await Result.findById(req.params.id);
  let courseLength = 0;
  data.courses.forEach(el => {
    courseLength++;
  });

  res.status(200).render('adminPreviewResult', {
    title: 'Result | The World of RU CSE 26',
    data: data,
    courseLength: courseLength
  });
};

exports.getLoginForm = (req, res, next) => {
  res.status(200).render('login', {
    title: 'Sign In | The World of RU CSE 26'
  });
};

exports.getSignupForm = (req, res, next) => {
  res.status(200).render('signUp', {
    title: 'Sign Up | The World of RU CSE 26'
  });
};

exports.getAdminForm = async (req, res, next) => {
  let nAdmin = 0,
    nSubAdmin = 0;

  const courses = await Course.find();
  const users = await User.find();
  const adminData = await User.find({ role: 'admin' });
  const subAdminData = await User.find({ role: 'subadmin' });

  const part1oddSemester = await Result.find({
    part: '1',
    semester: 'odd'
  });

  const part1evenSemester = await Result.find({
    part: '1',
    semester: 'even'
  });

  const part2oddSemester = await Result.find({
    part: '2',
    semester: 'odd'
  });

  const part2evenSemester = await Result.find({
    part: '2',
    semester: 'even'
  });

  const part3oddSemester = await Result.find({
    part: '3',
    semester: 'odd'
  });

  const part3evenSemester = await Result.find({
    part: '3',
    semester: 'even'
  });

  const part4oddSemester = await Result.find({
    part: '4',
    semester: 'odd'
  });

  const part4evenSemester = await Result.find({
    part: '4',
    semester: 'even'
  });

  users.forEach(el => {
    if (el.role === 'subadmin') {
      nSubAdmin++;
    }
    if (el.role === 'admin') {
      nAdmin++;
    }
  });
  res.status(200).render('admin', {
    title: 'Administrator | The World of RU CSE 26',
    nCourse: courses.length,
    nUsers: users.length,
    nAdmin: nAdmin,
    nSubAdmin: nSubAdmin,
    adminData: adminData,
    subAdminData: subAdminData,
    _1partOddSem: part1oddSemester.length,
    _1partEvenSem: part1evenSemester.length,
    _2partOddSem: part2oddSemester.length,
    _2partEvenSem: part2evenSemester.length,
    _3partOddSem: part3oddSemester.length,
    _3partEvenSem: part3evenSemester.length,
    _4partOddSem: part4oddSemester.length,
    _4partEvenSem: part4evenSemester.length
  });
};

exports.getProfileForm = (req, res, next) => {
  res.status(200).render('profile', {
    title: 'Account | The World of RU CSE 26',
    data: req.user
  });
};

exports.getUserForm = async (req, res, next) => {
  const users = await User.find();
  res.status(200).render('users', {
    title: 'All User | The World of RU CSE 26',
    data: users
  });
};

exports.getUserProfileShowForm = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).render('showUserProfile', {
    title: 'Profile | The World of RU CSE 26',
    data: user
  });
};

exports.getResultForm = (req, res, next) => {
  res.status(200).render('resultPublish', {
    title: 'Add Result | The World of RU CSE 26'
  });
};

exports.getUserEditForm = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).render('editUser', {
    title: 'Edit User | The World of RU CSE 26',
    data: user
  });
};

exports.getAddUserForm = async (req, res, next) => {
  res.status(200).render('addUser', {
    title: 'Add User | The World of RU CSE 26'
  });
};

exports.getShowResultForm = async (req, res, next) => {
  const part1oddSemester = await Result.find({ part: 1, semester: 'odd' });
  const part1evenSemester = await Result.find({ part: 1, semester: 'even' });
  const part2oddSemester = await Result.find({ part: 2, semester: 'odd' });
  const part2evenSemester = await Result.find({ part: 2, semester: 'even' });
  const part3oddSemester = await Result.find({ part: 3, semester: 'odd' });
  const part3evenSemester = await Result.find({ part: 3, semester: 'even' });
  const part4oddSemester = await Result.find({ part: 4, semester: 'odd' });
  const part4evenSemester = await Result.find({ part: 4, semester: 'even' });

  res.status(200).render('showResult', {
    title: 'All Result | The World of RU CSE 26',
    _1partOddSem: part1oddSemester,
    _1partEvenSem: part1evenSemester,
    _2partOddSem: part2oddSemester,
    _2partEvenSem: part2evenSemester,
    _3partOddSem: part3oddSemester,
    _3partEvenSem: part3evenSemester,
    _4partOddSem: part4oddSemester,
    _4partEvenSem: part4evenSemester
  });
};

exports.getCourseCategoryForm = async (req, res, next) => {
  const data = await Course.find();
  let max = 0;
  data.forEach(el => {
    if (el.courses.length > max) max = el.courses.length;
  });

  const arr = new Array(max);

  res.status(200).render('courseCategory', {
    title: 'All Courses | The World of RU CSE 26',
    data: data,
    arr: arr
  });
};

exports.getResultEditForm = async (req, res, next) => {
  const result = await Result.findById(req.params.id);
  res.render('editResult', {
    title: 'Edit Result | The World of RU CSE 26',
    data: result
  });
};

exports.getEditStudentResultForm = async (req, res, next) => {
  const result = await Result.findById(req.params.id);
  res.render('editStudentResult', {
    title: 'Edit My Result | The World of RU CSE 26',
    data: result
  });
  console.log(result);
};

exports.getAddCourseCategoryForm = (req, res, next) => {
  res.status(200).render('addCourseCategory', {
    title: 'Add Course | The World of RU CSE 26'
  });
};

exports.getCourseCategoryEditForm = async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  res.render('editCourseCategory', {
    title: 'Edit Course | The World of RU CSE 26',
    data: course
  });
};

exports.getUserslistForm = async (req, res, next) => {
  const users = await User.find();
  res.status(200).render('showUserslist', {
    title: 'All User | The World of RU CSE 26',
    data: users
  });
};

exports.getRandomResultForm = async (req, res, next) => {
  const result = await Result.find({
    studentId: req.params.studentId,
    part: 2,
    semester: 'odd'
  });
  res.status(200).render('randomResultShow', {
    title: 'Random Result | The World of RU CSE 26',
    data: result
  });
};

exports.getForgotPasswordForm = (req, res) => {
  res.status(200).render('forgotPassword', {
    title: 'Forgot Password | The World of RU CSE 26'
  });
};

exports.getResetPasswordForm = (req, res) => {
  const token = req.params.token;
  console.log(token);
  res.status(200).render('resetPassword', {
    title: 'Reset Password | The World of RU CSE 26',
    token: req.params.token
  });
};
