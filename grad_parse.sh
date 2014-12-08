COURSE_QID=$1
echo "Course name:"
grep "Q3_${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort | uniq
echo "Recommended Prerequisites:"
grep "Q14__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Recommended continuations:"
grep "Q15__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course feedback:"
grep "Q17__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course interestingness:"
grep "Q13_1__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Course ease:"
grep "Q13_2__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Professor feedback:"
grep "Q13_3__${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort
echo "Work needed:"
grep "Q16_.*_${COURSE_QID}" "Course_Visualizer_cleanintend.xml" | sort | uniq
echo "\n\n"
