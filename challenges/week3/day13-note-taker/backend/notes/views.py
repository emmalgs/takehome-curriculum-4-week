from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET', 'POST'])
def note_list(request):
    # GET: return all notes
    # POST: create new note
    pass

@api_view(['DELETE'])
def note_detail(request, pk):
    # DELETE: remove note or 404
    pass
