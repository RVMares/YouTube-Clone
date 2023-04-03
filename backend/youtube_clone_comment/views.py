from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_comments(request, pk):

    comments = get_object_or_404(Comment, pk=pk)

    serialized_comments = CommentSerializer(comments, many=True)

    return Response(serialized_comments.data, status=status.HTTP_200_OK)