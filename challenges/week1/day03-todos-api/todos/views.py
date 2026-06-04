from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET'])
def todo_list(request):
    # TODO: return all todos
    pass

@api_view(['GET'])
def todo_detail(request, pk):
    # TODO: return single todo or 404
    pass
