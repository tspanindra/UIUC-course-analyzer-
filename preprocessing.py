def main():
  f = open("Course_Visualizer_clean.xml","r")
  lines = f.readlines()
  f.close()
  f = open("Course_Visualizer_cleanintend.xml","w")
  
  for line in lines:
    if '><' not in line:
      f.write(line)
        
  f.close()

if __name__ == "__main__":
    main()
