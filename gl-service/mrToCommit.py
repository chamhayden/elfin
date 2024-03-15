import sys
import os
import gitlab # type: ignore

gitlab_config_file = os.path.dirname(__file__) + '/.python-gitlab.cfg'
gl = gitlab.Gitlab.from_config(config_files=[gitlab_config_file])

# 24T1 H17B_CRUNCHIE 67

if len(sys.argv) != 4:
	print("null") # Bad arguments
	sys.exit(1)

term = sys.argv[1]
group = sys.argv[2]
mrid = sys.argv[3]

project = gl.projects.get(f"COMP1531/{term}/groups/{group}/project-backend")
try:
	mr = project.mergerequests.get(mrid)
	hsh = mr.sha[0:8]
except:
	print("null", end='')
	sys.exit(1)

print(hsh, end='')
sys.exit(0)