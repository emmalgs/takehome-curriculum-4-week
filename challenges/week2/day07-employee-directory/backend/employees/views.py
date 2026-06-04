from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Employee
from .serializers import EmployeeSerializer

@api_view(['GET'])
def employee_list(request):
    # TODO: return all employees
    # Support ?department= filter
    pass

@api_view(['GET'])
def employee_detail(request, pk):
    # TODO: return single employee or 404
    pass
