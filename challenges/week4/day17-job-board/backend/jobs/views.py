from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Job
from .serializers import JobSerializer

@api_view(['GET'])
def job_list(request):
    pass  # TODO

@api_view(['GET'])
def job_detail(request, pk):
    pass  # TODO
