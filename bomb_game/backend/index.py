import random
import json
from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route

rows, cols = (5,5)
arr = [[None for i in range(cols)] for j in range(rows)]
# print(arr)

for i in range(5):
    x = random.randint(0,4)
    y = random.randint(0,4)
    arr[x][y] = "bomb"

print(arr)
json_arr = json.dumps(arr)
print(json_arr)
async def homepage(request):
    return JSONResponse(json_arr,status_code=200)

app = Starlette(debug=True, routes=[
    Route('/bombgame', homepage),
])
# print(json_arr)

# input_step = True
# completed_cell = 0
# while input_step:

#     x_input = int(input("Enter x: "))
#     y_input = int(input("Enter y: "))
#     chosen_cell = arr[x_input][y_input]

#     if (chosen_cell != "chosen"):

#         if (chosen_cell == "bomb"):
#             print("game over")
#             input_step = False
#         else:
#             arr[x_input][y_input] = "chosen"
#             completed_cell +=1

#             if completed_cell == 20:
#                 print("You win")
#                 input_step = False
#     else:
#         print("Its already chosen")

#     print(arr)
#     print("Count: ",completed_cell)        
    



#################################### test codes ######################################################
# import numpy as np
# arr = np.array([[1,2,3],
#                 [4,5,6]])

# print(arr)

# arr[0][0] = 10

# print(arr)
# rondom
# import numpy as np
# arr = np.array([5,5])
# print(arr)


