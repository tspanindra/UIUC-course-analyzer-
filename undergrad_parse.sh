COURSE_QID=$1
echo "Course name:\n"
grep "Q2_${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort | uniq
echo "Recommended Prerequisites:\n"
grep "Q7__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Recommended continuations:\n"
grep "Q8__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course feedback:\n"
grep "Q10__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course interestingness:\n"
grep "Q6_1__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course ease:\n"
grep "Q6_2__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Professor feedback:\n"
grep "Q6_3__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Work needed:"
grep "Q9_.*_${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort | uniq
echo "\n\n"
